'use client'

import { shuffleArray } from '@/lib/utils/Functions';
import { TypeFriendCard, FriendData } from '@/lib/utils/Types';
import { dummyFriendData } from '@/lib/utils/friends';
import elasticlunr, { Index } from 'elasticlunr';
import React, { ChangeEventHandler, useEffect, useState } from 'react'
import FriendCard from './FriendCard';
import MessageDialog from './MessageDialog';

const ClientCodes = () => {

    const shuffledData = shuffleArray(dummyFriendData);
    const [searchedProfiles, setSearchedProfiles] = useState<TypeFriendCard[]>([])
    // search bar
    const [showInput, setShowInput] = useState(true);
    const toggleInput = () => setShowInput(!showInput);

    const [inputValue, setInputValue] = useState('');

    const handleClearInput = () => {
        setInputValue('');
    };

    // search function

    const [index, setIndex] = useState<Index<FriendData>>();
    const searchFun: ChangeEventHandler<HTMLInputElement> = async (event) => {
        const searchkey = event.currentTarget.value;
        setInputValue(event.target.value);
        // Filter the people array based on the search value
        const namesearched = dummyFriendData.filter((friend) =>
            friend.name.toLowerCase().includes(searchkey)
        );

        if (namesearched.length === 0) {
            const results = index?.search(searchkey);
            setSearchedProfiles(
                results?.map((result) => dummyFriendData.find((friend) => friend.id === result.ref)).filter((friend) => friend !== undefined) as TypeFriendCard[]
            );
        } else if (namesearched.length > 0) {
            setSearchedProfiles(namesearched)
        } else {
            setSearchedProfiles([])
        }
    }

    useEffect(() => {
        if (dummyFriendData) {
            const documents: FriendData[] = dummyFriendData.map((friend) => {
                return {
                    name: friend.name,
                    institution: friend.institution || "", // Handle undefined values by providing a default value
                    firstimpressions: friend.firstimpressions || "", // Handle undefined values by providing a default value
                    bestmemory: friend.bestmemory || "", // Handle undefined values by providing a default value
                    id: friend.id || "", // Handle undefined values by providing a default value
                };
            });
            const index = elasticlunr<FriendData>(function () {
                this.addField('firstimpressions');
                this.addField('institution');
                this.addField('bestmemory');
                this.addField('name');
                this.setRef('id');
            });
            documents.forEach((doc) => {
                index.addDoc(doc);
            });
            setIndex(index)
        }
    }, [dummyFriendData]);

    return (
        <div className='w-full'>
            <div className="relative w-[90%] sm:w-[75%] md:w-[65%] lg:w-[55%] xl:w-[45%] mx-auto">
                <input
                    className={`bg-gray-200 focus:border border-transparent focus:border-gray-300 w-full rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none`}
                    type="text"
                    placeholder="Search Your Name, school, college..."
                    onChange={searchFun}
                    value={inputValue}
                />
                {inputValue && (
                    <button
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700 hover:text-gray-900"
                        onClick={() => {
                            setInputValue('')
                            // setPeople(initialPeople)
                        }}>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                className="heroicon-ui"
                                d="M9.29289,12 L4.64645,7.35355 C4.45118,7.15829 4.45118,6.84171 4.64645,6.64645 C4.84171,6.45118 5.15829,6.45118 5.35355,6.64645 L10,11.29289 L14.64645,6.64645 C14.84171,6.45118 15.15829,6.45118 15.35355,6.64645 C15.5488,6.84171 15.5488,7.15829 15.35355,7.35355 L10.70711,12 L15.35355,16.64645 C15.5488,16.8417 15.5488,17.1583 15.35355,17.3536 C15.15829,17.5488 14.84171,17.5488 14.64645,17.3536 L10,12.70711 L5.35355,17.3536 C5.15829,17.5488 4.84171,17.5488 4.64645,17.3536 C4.45118,17.1583 4.45118,16.8417 4.64645,16.64645 L9.29289,12 Z"
                            />
                        </svg>
                    </button>
                )}
            </div>
            <div className='flex flex-wrap justify-center mt-5'>
                {inputValue ? <>
                    {searchedProfiles.length > 0
                        ? searchedProfiles.map((friend, index) => (
                            <div className='mx-5 mt-5' key={index}>
                                <FriendCard data={friend} />
                            </div>
                        ))
                        : <div>
                            <MessageDialog string='I&apos;ll add you '>
                                <div>
                                    <p>Didn&apos;t see your name? Don&apos;t worry. Even i&apos;m not in the list.</p>
                                </div>
                            </MessageDialog>
                        </div>}
                </> : <>
                    {shuffledData?.map((friend, index) => (
                        <div className='mx-5 mt-5' key={index}>
                            <FriendCard data={friend} />
                        </div>
                    ))}
                </>}
            </div>

        </div>
    )
}

export default ClientCodes
