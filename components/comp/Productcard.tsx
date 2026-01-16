"use client";

import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addItem, increment, decrement } from "../../store/slices/cart.slice";

import {useRouter} from "next/navigation";

interface Props {
  id: string;
  name: string;
  price: number;
  image: string;
  unit: string;
}

export default function ProductCard(props: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const item = useAppSelector(
    state => state.cart.items.find(i => i.id === props.id)
  );

  return (
    <Card className="w-[180px] rounded-xl border hover:shadow-md transition " onClick={()=>{
      router.push(`/product/${props.id}`)
    }}>
      {/* IMAGE */}
      <div className="flex justify-center items-center h-[120px]  rounded-t-xl">
        <Image
          src={props.image}
          alt={props.name}
          width={90}
          height={90}
          className="object-fill"
        />
      </div>

      {/* CONTENT */}
      <div className="p-3 space-y-1">
        <p className="text-sm font-medium line-clamp-1">
          {props.name}
        </p>
        <p className="text-xs text-muted-foreground">
          {props.unit}
        </p>

        <div className="flex items-center justify-between pt-1">
          <span className="font-semibold text-base">
            ₹{props.price}
          </span>

          {!item ? (
            <Button
              variant="neon"
              size="sm"
              onClick={(e) =>{
                  e.stopPropagation();  
                dispatch(addItem({ ...props, quantity: 1 }))
              }
              }
            >
              Add
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                className="h-7 w-7"
                onClick={(e) =>{
                    e.stopPropagation();
                  dispatch(decrement(props.id))}
                }
              >
                <Minus size={14} />
              </Button>

              <span className="text-sm font-semibold">
                {item.quantity}
              </span>

              <Button
                size="icon"
                variant="neon"
                className="h-7 w-7"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(increment(props.id))
                }

                }
              >
                <Plus size={14} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
