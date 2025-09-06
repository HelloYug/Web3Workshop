import { Contract, GlobalState, uint64 } from "@algorandfoundation/algorand-typescript";

export class StudyTracker extends Contract {
  // Global state: stores total study hours
  totalHours = GlobalState<uint64>({ key: "totalHours", initialValue: 0 });

  // Add study hours
  addHours(hours: uint64): uint64 {
    this.totalHours.value += hours;
    return this.totalHours.value;
  }

  // Reset study hours
  resetHours(): string {
    this.totalHours.value = 0;
    return "Study hours reset successfully!";
  }

  // Get current study hours
  getHours(): uint64 {
    return this.totalHours.value;
  }
}
