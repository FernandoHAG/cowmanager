let checklistType = {
  _id: String,
  type: String,
  amount_of_milk_produced: Number,
  number_of_cows_head: Number,
  had_supervision: Boolean,
  farmer: {
    name: String,
    city: String,
  },
  from: {
    name: String,
  },
  to: {
    name: String,
  },
  location: {
    latitude: Number,
    longitude: Number,
  },
  created_at: String,
  updated_at: String,
};

export default checklistType;
