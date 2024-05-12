import React, { useState, useContext } from "react";
import Image from "next/image";
//INTERNAL IMPORT
import Style from "./Filter.module.css";
import { ChatAppContect } from "@/Context/ChatAppContext";
import images from "../../assets";
import { Model } from "../index";

const Filter = () => {
  const { account, addFriends } = useContext(ChatAppContect);
  const {} = useContext(ChatAppContect);
  //USESTATE
  const [addFriend, setAddFriends] = useState(false);
  return (
    <div className={Style.Filter}>
      <div className={Style.Filter_box}>
        <div className={Style.Filter_box_left}>
          <div className={Style.Filter_box_left_search}>
            <Image src={images.search} alt="image" width={20} height={20} />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className={Style.Filter_box_right}>
          <button>
            <Image src={images.clear} alt="clear" width={20} height={20} />
            CLEAR CHAT
          </button>
          <button onClick={() => setAddFriend(true)}>
            <Image src={images.user} alt="add" width={20} height={20} />
            ADD FRIENDS
          </button>
        </div>
      </div>
      //MODEL COMPONENT
      {addFriend && (
        <div className={Style.Filter_model}>
          <Model
            openBox={setAddFriends}
            title="WELLCOME"
            head="CHAT BUDDY"
            info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem natus quia, ut itaque quaerat nihil exercitationem eveniet laboriosam facere voluptates, amet nulla repellat maiores eum quisquam animi sed illum voluptas."
            smallInfo="Kindley Select Your Friend Name & Address.."
            image={images.hero}
            functionName={addFriends}
          />
        </div>
      )}
    </div>
  );
};

export default Filter;
