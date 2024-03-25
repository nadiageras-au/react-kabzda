import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo demo'
}



export const useMemoHelper = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(4)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(()=>{
        let tempResult = resultA
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while(fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResult = tempResult * i;
        }
        return tempResult;
    }, [a]);

    for (let i = 1; i <= b; i++) {
       resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e)=>setB(Number(e.currentTarget.value))}/>
        <hr/>
            <div>a = {resultA}</div>
            <div>b = {resultB}</div>
    </>
}

const SecretUsers = (props: { users: Array<string> }) => {
    console.log("users secret")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(SecretUsers)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Alina', 'Maxim', 'Igor'])

    const newArray = useMemo(()=> {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    const addUser=()=>{
        const newUsers = [...users, 'Sveta ' + new Date().getTime()];
        setUsers(newUsers)
    }
    return <>
        <button onClick={()=> setCounter(counter+1)}>+</button>
        <button onClick={()=> addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}
export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['JS', 'React', 'Redux'])

    const newArray = useMemo(()=> {
        return books.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [books])

    // const addBook=()=>{
    //     const newBooks = [...books, 'Typescript ' + new Date().getTime()];
    //     setBooks(newBooks)
    // }

    // const memoizedAddBook = useMemo(()=> {
    //     return addBook
    // }, [books])

    const memoizedAddBook2 = useCallback(()=> {
        console.log(books)
        const newBooks = [...books, 'Typescript ' + new Date().getTime()];
        setBooks(newBooks)
    }, [books])



    return <>
        <button onClick={()=> setCounter(counter+1)}>+</button>

        {counter}
        <Books books={newArray} addBook={memoizedAddBook2}/>
    </>
}

const SecretBooks = (props: { books: Array<string>; addBook: ()=> void }) => {
    console.log("books")
    return <div>
        <button onClick={()=> props.addBook()}>add book</button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}

const Books = React.memo(SecretBooks)
