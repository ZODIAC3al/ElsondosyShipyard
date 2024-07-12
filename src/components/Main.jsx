import CardComponent from "./CardComponent";
import { eagleYacht2, Yacht3, Yacht4, Yacht5, Yacht6 } from "../main";
export default function Main() {
  const features = (
    <ul className="">
      <span className="font-bold text-sm">All works are Egyptian handmade</span>
      <li>27 m </li>
      <li>Double cabins ( summer & winter ) </li>
      <li>2 engines each one 1100 hp turbo total hp 2200 hp twin turbo</li>
      <li>5 sweats </li>
      <li>2 bathrooms</li>
      <li>2 Water tanks each one 3500 liters from stainless steel</li>
      <li>2 gasoline tanks each one 7500 liter from black iron </li>
      <li>1 meeting room </li>
      <li>1 kitchen </li>
      <li>1 room for anchor and ropes</li>
    </ul>
  );
  const features2 = (
    <ul className="">
      <span className="font-bold text-sm">Ocean Data Acquisition System </span>
      <li>1 - for lateral marks</li>
      <li>2- the marks of the original parties ( cardinal marks ) </li>
      <li>3- isolated danger parts</li>
      <li>4- safe water marks </li>
      <li>5- special water marks</li>
    </ul>
  );
  const features4 = (
    <ul className="">
      <span className="font-bold text-sm">Sport fishing yacht </span>
      <li>10.5 meter </li>
      <li>1 engine 300 hp (outboard) Suzuki</li>
      <li>1 bathroom</li>
      <li>1 kitchen </li>
      <li>1 room </li>
      <li>Built in ice box for fishing </li>
      <li>1 fishbowl</li>
    </ul>
  );
  const features3 = (
    <ul className="">
      <span className="font-bold text-sm">
        Hybrid yachts is a fiber glass yacht with low coast
      </span>
    </ul>
  );
  const features5 = (
    <ul className="">
      <span className="font-bold text-sm">
        With all designs and any length are available at our yard
      </span>
    </ul>
  );

  return (
    <section className="container gap-8 mb-8  m-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
      <CardComponent
        image={eagleYacht2}
        title="Eagle yacht"
        features={features}
      />
      <CardComponent image={Yacht3} title="ODAS" features={features2} />
      <CardComponent
        image={Yacht4}
        title="Hybrid yachts"
        features={features3}
      />
      <CardComponent image={Yacht5} title="Steel yachts" features={features5} />
      <CardComponent
        image={Yacht6}
        title="Blue moon yacht "
        features={features4}
      />
    </section>
  );
}
