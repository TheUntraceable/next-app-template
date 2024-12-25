import { DatePicker } from "@nextui-org/date-picker";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Hi</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Calender becomes uninteractive inside of a Dialog from ShadCN.
            </DialogTitle>
          </DialogHeader>
          <DatePicker
            label="Due Dat ASDASDA-e"
            color="primary"
            variant="bordered"
            showMonthAndYearPickers
          />
        </DialogContent>
      </Dialog>
    </section>
  );
}
