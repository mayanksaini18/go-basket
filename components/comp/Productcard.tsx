"use client";

import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addItem, increment, decrement } from "@/store/slices/cart.slice";

interface Props {
  id: string;
  name: string;
  price: number;
  image: string;
  unit: string;
}

export default function ProductCard(props: Props) {
  const dispatch = useAppDispatch();
  const item = useAppSelector(
    state => state.cart.items.find(i => i.id === props.id)
  );

  return (
    
    <Card className="relative w-[170px] transition hover:shadow-lg">
      
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-center">
          <Image
            src={props.image}
            alt={props.name}
            width={90}
            height={90}
            className="object-contain"
          />
        </div>

        <p className="text-sm font-medium">{props.name}</p>
        <p className="text-xs text-muted-foreground">{props.unit}</p>
        <p className="font-semibold">₹{props.price}</p>

        {/* ADD / QUANTITY */}
        {!item ? (
          <Button
            variant="neon"
            size="sm"
            className="w-full mt-2"
            onClick={() =>
              dispatch(addItem({ ...props, quantity: 1 }))
            }
          >
            Add
          </Button>
        ) : (
          <div className="flex items-center justify-between mt-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => dispatch(decrement(props.id))}
            >
              <Minus size={14} />
            </Button>

            <span className="font-semibold">{item.quantity}</span>

            <Button
              size="icon"
              variant="neon"
              onClick={() => dispatch(increment(props.id))}
            >
              <Plus size={14} />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
