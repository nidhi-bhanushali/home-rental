"use client";
import { cities, propertyTypes } from "@/mockDataStore/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z
    .string({
      message: "Name is required",
    })
    .min(2, "Name is required")
    .max(50),
  address: z
    .string({
      required_error: "Address is required",
    })
    .min(2, "Address is required")
    .max(100),
  unit: z
    .number({
      message: "Unit is required",
    })
    .int("Unit number must be a number"),
  city: z.enum(
    cities.map((city) => city.value),
    {
      message: "City is required",
      required_error: "City is required",
    }
  ),
  roomType: z.enum(["studio", "one-bedroom", "two-bedroom", "penthouse"], {
    message: "Room type is required",
    required_error: "Room type is required",
  }),
  rent: z
    .number({
      message: "Price is required",
    })
    .int("Price must be a number"),
  description: z
    .string({
      message: "Description is required",
    })
    .min(10, "Description is too short"),
  file: z.string({
    message: "Image is required",
  }),
});

const FormComp = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      unit: "",
      city: "",
      roomType: "",
      rent: "",
      description: "",
    },
  });

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Card className="md:shadow-form-control mx-5 md:mx-20 border-0 shadow-form-control-sm rounded-2xl">
      <CardContent className="md:p-11 p-5">
        <CardHeader className="p-0 lg:pb-10 pb-4">
          <h3 className="text-2xl text-primary text-center font-semibold leading-none tracking-tight">
            Add A New Property
          </h3>
        </CardHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 lg:space-y-11 items-center 2xl:items-start flex flex-col justify-between"
          >
            <div className="grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-11 gap-y-4 lg:gap-y-11">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-[280px] md:w-[370px] space-y-0">
                    <FormLabel>
                      Name <span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-[52px]"
                        placeholder="Enter Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="w-[280px] md:w-[370px] space-y-0">
                    <FormLabel>
                      Address <span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-[52px]"
                        placeholder="Enter Address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="unit"
                render={({ field }) => (
                  <FormItem className="w-[280px] md:w-[370px] space-y-0">
                    <FormLabel>
                      Unit Number <span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-[52px]"
                        type="number"
                        placeholder="Enter unit number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="w-[280px] md:w-[370px] space-y-0">
                    <FormLabel>
                      City <span className="text-primary">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-[280px] md:w-[370px] h-[52px]">
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city.label} value={city.value}>
                            {city.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="roomType"
                render={({ field }) => (
                  <FormItem className="w-[280px] md:w-[370px] space-y-0">
                    <FormLabel>
                      Room Type <span className="text-primary">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-[280px] md:w-[370px] h-[52px]">
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {propertyTypes.map((property) => (
                          <SelectItem
                            key={property.label}
                            value={property.value}
                          >
                            {property.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rent"
                render={({ field }) => (
                  <FormItem className="w-[280px] md:w-[370px] space-y-0">
                    <FormLabel>
                      Price <span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-[52px]"
                        placeholder="Enter Price"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="lg:w-full w-[280px] md:w-[370px] space-y-0">
                  <FormLabel>
                    Description <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-[#F9F9F9] h-[151px]"
                      placeholder="Enter Description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem className="lg:w-full w-[280px] md:w-[370px] space-y-0">
                  <FormLabel>
                    Upload Photos <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <div
                      className="h-[122px] flex flex-cols items-center justify-center
                    border-dashed rounded-lg border-[1px] border-primary"
                    >
                      <Input
                        type="file"
                        id="custom-input"
                        name="file"
                        className="hidden"
                        accept=".png, .jpg, .jpeg"
                        {...field}
                      />
                      <label
                        className="flex flex-col items-center gap-[10px]"
                        for="custom-input"
                      >
                        <span className="text-black font-medium text-base">
                          Click here to Upload Image
                        </span>
                        <span className="text-[10px] block text-[#00000080]">
                          Supported: JPG, JPEG, PNG
                        </span>
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="lg:w-full w-[280px] md:w-[370px] h-[52px]"
            >
              Add New Property
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FormComp;
