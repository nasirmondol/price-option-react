import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const gymOptions = [
    {
      "id": 1,
      "name": "Fitness World",
      "location": "123 Main Street",
      "city": "New York",
      "state": "NY",
      "zip_code": "10001",
      "phone": "555-123-4567",
      "membership_fee": 50.00,
      "membership_type": "Premium",
      "options": ["Personal Trainer", "Group Classes", "Sauna"]
    },
    {
      "id": 2,
      "name": "Gym Express",
      "location": "456 Elm Avenue",
      "city": "Los Angeles",
      "state": "CA",
      "zip_code": "90001",
      "phone": "555-987-6543",
      "membership_fee": 40.00,
      "membership_type": "Basic",
      "options": ["Personal Trainer", "Group Classes", "Sauna"]
    },
    {
      "id": 3,
      "name": "FitZone",
      "location": "789 Oak Drive",
      "city": "Chicago",
      "state": "IL",
      "zip_code": "60601",
      "phone": "555-555-5555",
      "membership_fee": 60.00,
      "membership_type": "Premium",
      "options": ["Personal Trainer", "Yoga Classes", "Pool"]
    }
  ]

  return (
    <div>
      <h2>Price options</h2>
      <div className="grid md:grid-cols-3 gap-6 flex flex-col">
        {
          gymOptions.map(option => <PriceOption className="flex-grow" key={option.id} option={option}></PriceOption>)
        }
      </div>
    </div>
  );
};

export default PriceOptions;