"use server";

import { z } from "zod";

const FormSchema = z.object({
  deliveryType: z.string().min(1, "Please choose delivery type."),
  pickupLocation: z.string().min(1, "Please enter pickup location."),
  dropLocation: z.string().min(1, "Please enter drop location."),
});

export type State = {
  errors?: {
    deliveryType?: string[];
    pickupLocation?: string[];
    dropLocation?: string[];
  };
  message?: string | null;
  success: boolean;
};

export async function action(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = FormSchema.safeParse({
    deliveryType: formData.get("deliveryType"),
    pickupLocation: formData.get("pickupLocation"),
    dropLocation: formData.get("dropLocation"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields.",
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(validatedFields.data);

  return { success: true };
}
