/* =====================================================
   CONTRACT
===================================================== */

// const contractAddress =
//     "YOUR_CONTRACT_ADDRESS";


// const contractABI = [

//     {
//         "inputs": [
//             {
//                 "internalType": "string",
//                 "name": "_name",
//                 "type": "string"
//             }
//         ],
//         "name": "addCandidate",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },

//     {
//         "inputs": [],
//         "name": "startElection",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },

//     {
//         "inputs": [],
//         "name": "endElection",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },

//     {
//         "inputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "_candidateId",
//                 "type": "uint256"
//             }
//         ],
//         "name": "vote",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },

//     {
//         "inputs": [],
//         "name": "getCandidateCount",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },

//     {
//         "inputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "name": "candidates",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "id",
//                 "type": "uint256"
//             },
//             {
//                 "internalType": "string",
//                 "name": "name",
//                 "type": "string"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "voteCount",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },

//     {
//         "inputs": [
//             {
//                 "internalType": "address",
//                 "name": "",
//                 "type": "address"
//             }
//         ],
//         "name": "hasVoted",
//         "outputs": [
//             {
//                 "internalType": "bool",
//                 "name": "",
//                 "type": "bool"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },

//     {
//         "inputs": [],
//         "name": "admin",
//         "outputs": [
//             {
//                 "internalType": "address",
//                 "name": "",
//                 "type": "address"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },

//     {
//         "inputs": [],
//         "name": "electionStarted",
//         "outputs": [
//             {
//                 "internalType": "bool",
//                 "name": "",
//                 "type": "bool"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },

//     {
//         "inputs": [],
//         "name": "electionEnded",
//         "outputs": [
//             {
//                 "internalType": "bool",
//                 "name": "",
//                 "type": "bool"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     }

// ];

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const contractABI = 
[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "addCandidate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "candidates",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "voteCount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "electionEnded",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "electionStarted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "endElection",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCandidateCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "hasVoted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startElection",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_candidateId",
          "type": "uint256"
        }
      ],
      "name": "vote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
];


/* =====================================================
   VARIABLES
===================================================== */

let provider = null;

let signer = null;

let contract = null;

let selectedCandidateId = null;


/*
    These are the two parties for your demo.
*/

const partyNames = [
    "Vee Front",
    "SpongeBob SquarePants Party"
];


const partyIcons = [
    "🍍",
    "🧽"
];


/* =====================================================
   CONNECT WALLET
===================================================== */

async function connectWallet() {

    try {

        if (!window.ethereum) {

            alert(
                "Please install MetaMask."
            );

            return;
        }


        provider =
            new ethers.BrowserProvider(
                window.ethereum
            );


        await provider.send(
            "eth_requestAccounts",
            []
        );


        signer =
            await provider.getSigner();


        contract =
            new ethers.Contract(
                contractAddress,
                contractABI,
                signer
            );


        const address =
            await signer.getAddress();


        document.getElementById(
            "walletAddress"
        ).innerText =
            shortenAddress(address);


        await checkAdmin();

        await updateElectionStatus();

        await loadCandidates();


    } catch (error) {

        console.error(error);

        alert(
            "Could not connect to MetaMask."
        );

    }
}


/* =====================================================
   SHORT ADDRESS
===================================================== */

function shortenAddress(address) {

    return (
        address.substring(0, 6) +
        "..." +
        address.substring(
            address.length - 4
        )
    );
}


/* =====================================================
   CHECK ADMIN
===================================================== */

async function checkAdmin() {

    try {

        const admin =
            await contract.admin();


        const currentUser =
            await signer.getAddress();


        const isAdmin =
            admin.toLowerCase() ===
            currentUser.toLowerCase();


        document.getElementById(
            "adminPanel"
        ).style.display =
            isAdmin
                ? "block"
                : "none";


    } catch (error) {

        console.error(error);

    }
}


/* =====================================================
   ADD PARTY
===================================================== */

async function addCandidate() {

    try {

        const input =
            document.getElementById(
                "candidateName"
            );


        const name =
            input.value.trim();


        if (!name) {

            showMessage(
                "adminMessage",
                "Enter a party name."
            );

            return;
        }


        const transaction =
            await contract.addCandidate(
                name
            );


        showMessage(
            "adminMessage",
            "Adding party..."
        );


        await transaction.wait();


        input.value = "";


        showMessage(
            "adminMessage",
            "Party added successfully."
        );


        await loadCandidates();


    } catch (error) {

        console.error(error);

        showMessage(
            "adminMessage",
            getError(error)
        );
    }
}


/* =====================================================
   START ELECTION
===================================================== */

async function startElection() {

    try {

        const transaction =
            await contract.startElection();


        showMessage(
            "adminMessage",
            "Starting election..."
        );


        await transaction.wait();


        showMessage(
            "adminMessage",
            "Election started."
        );


        await updateElectionStatus();


    } catch (error) {

        console.error(error);

        showMessage(
            "adminMessage",
            getError(error)
        );
    }
}


/* =====================================================
   END ELECTION
===================================================== */

async function endElection() {

    try {

        const transaction =
            await contract.endElection();


        showMessage(
            "adminMessage",
            "Ending election..."
        );


        await transaction.wait();


        showMessage(
            "adminMessage",
            "Election ended."
        );


        await updateElectionStatus();

        await loadResults();


    } catch (error) {

        console.error(error);

        showMessage(
            "adminMessage",
            getError(error)
        );
    }
}


/* =====================================================
   LOAD PARTIES
===================================================== */

async function loadCandidates() {

    try {

        if (!contract) {

            return;
        }


        const list =
            document.getElementById(
                "candidatesList"
            );


        list.innerHTML = "";


        const count =
            await contract.getCandidateCount();


        if (Number(count) === 0) {

            list.innerHTML = `
                <p class="message">
                    No parties have been added yet.
                </p>
            `;

            return;
        }


        for (
            let i = 0;
            i < Number(count);
            i++
        ) {

            const candidate =
                await contract.candidates(i);


            const candidateId =
                Number(candidate[0]);


            /*
                For the first two parties,
                show the names you requested.
            */

            const name =
                partyNames[candidateId]
                || candidate[1];


            const icon =
                partyIcons[candidateId]
                || "🗳️";


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "candidate-card";


            card.innerHTML = `

                <div class="candidate-info">

                    <div class="party-icon">
                        ${icon}
                    </div>

                    <div>

                        <div class="candidate-number">
                            PARTY #${candidateId + 1}
                        </div>

                        <div class="candidate-name">
                            ${name}
                        </div>

                    </div>

                </div>


                <button
                    class="vote-btn"
                    type="button">

                    CLICK TO VOTE

                </button>

            `;


            const voteButton =
                card.querySelector(
                    ".vote-btn"
                );


            voteButton.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();


                    selectCandidate(
                        candidateId,
                        name,
                        card
                    );

                }
            );


            list.appendChild(card);
        }


        await checkAlreadyVoted();


    } catch (error) {

        console.error(
            "Loading parties failed:",
            error
        );

    }
}


/* =====================================================
   SELECT PARTY
===================================================== */

function selectCandidate(
    candidateId,
    candidateName,
    card
) {

    selectedCandidateId =
        candidateId;


    document
        .querySelectorAll(
            ".candidate-card"
        )
        .forEach(
            item => {

                item.classList.remove(
                    "selected"
                );

            }
        );


    card.classList.add(
        "selected"
    );


    document.getElementById(
        "selectedCandidate"
    ).innerText =
        `Selected: ${candidateName}`;


    document.getElementById(
        "confirmVoteBtn"
    ).disabled = false;
}


/* =====================================================
   CHECK ALREADY VOTED
===================================================== */

async function checkAlreadyVoted() {

    try {

        const address =
            await signer.getAddress();


        const voted =
            await contract.hasVoted(
                address
            );


        const button =
            document.getElementById(
                "confirmVoteBtn"
            );


        if (voted) {

            button.disabled = true;


            button.innerText =
                "Already Voted";


            document.getElementById(
                "voteMessage"
            ).innerText =
                "You have already voted.";


            document
                .querySelectorAll(
                    ".vote-btn"
                )
                .forEach(
                    btn => {

                        btn.disabled = true;

                        btn.style.opacity =
                            "0.5";

                        btn.style.cursor =
                            "not-allowed";

                    }
                );
        }


    } catch (error) {

        console.error(error);

    }
}


/* =====================================================
   CONFIRM VOTE
===================================================== */

async function confirmVote() {

    try {

        if (
            selectedCandidateId === null
        ) {

            return;
        }


        const confirmed =
            confirm(
                "Are you sure you want to cast this vote?"
            );


        if (!confirmed) {

            return;
        }


        const button =
            document.getElementById(
                "confirmVoteBtn"
            );


        button.disabled = true;

        button.innerText =
            "Submitting...";


        const transaction =
            await contract.vote(
                selectedCandidateId
            );


        showMessage(
            "voteMessage",
            "Waiting for blockchain confirmation..."
        );


        await transaction.wait();


        button.innerText =
            "Vote Submitted";


        showMessage(
            "voteMessage",
            "✓ Your vote has been recorded."
        );


        selectedCandidateId = null;


        await loadCandidates();

        await loadResults();


    } catch (error) {

        console.error(error);


        const button =
            document.getElementById(
                "confirmVoteBtn"
            );


        button.disabled = false;

        button.innerText =
            "Confirm Vote";


        showMessage(
            "voteMessage",
            getError(error)
        );
    }
}


/* =====================================================
   RESULTS
===================================================== */

async function loadResults() {

    try {

        if (!contract) {

            return;
        }


        const results =
            document.getElementById(
                "results"
            );


        results.innerHTML = "";


        const count =
            await contract.getCandidateCount();


        if (Number(count) === 0) {

            results.innerHTML = `
                <p class="message">
                    No parties available.
                </p>
            `;

            return;
        }


        let parties = [];

        let totalVotes = 0;


        for (
            let i = 0;
            i < Number(count);
            i++
        ) {

            const candidate =
                await contract.candidates(i);


            const id =
                Number(candidate[0]);


            const name =
                partyNames[id]
                || candidate[1];


            const votes =
                Number(candidate[2]);


            totalVotes += votes;


            parties.push({

                name: name,

                votes: votes

            });
        }


        parties.sort(
            (a, b) =>
                b.votes - a.votes
        );


        parties.forEach(
            party => {

                const percentage =
                    totalVotes === 0
                        ? 0
                        : (
                            party.votes /
                            totalVotes
                        ) * 100;


                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "result-card";


                card.innerHTML = `

                    <div class="result-top">

                        <span class="result-name">
                            ${party.name}
                        </span>

                        <span class="result-votes">
                            ${party.votes} votes
                            (${percentage.toFixed(1)}%)
                        </span>

                    </div>


                    <div class="progress-container">

                        <div
                            class="progress-bar"
                            style="width:${percentage}%">
                        </div>

                    </div>

                `;


                results.appendChild(card);
            }
        );


        const total =
            document.createElement(
                "div"
            );


        total.className =
            "total-votes";


        total.innerText =
            `Total Votes: ${totalVotes}`;


        results.appendChild(total);


        if (totalVotes > 0) {

            const winner =
                parties[0];


            const winnerDiv =
                document.createElement(
                    "div"
                );


            winnerDiv.className =
                "winner";


            winnerDiv.innerText =
                `🏆 Leading Party: ${winner.name}`;


            results.appendChild(
                winnerDiv
            );
        }


    } catch (error) {

        console.error(error);

    }
}


/* =====================================================
   ELECTION STATUS
===================================================== */

async function updateElectionStatus() {

    try {

        const started =
            await contract.electionStarted();


        const ended =
            await contract.electionEnded();


        const status =
            document.getElementById(
                "electionStatus"
            );


        if (!started) {

            status.innerText =
                "● Not Started";

            status.style.color =
                "#9db0d0";

        }

        else if (ended) {

            status.innerText =
                "● Election Ended";

            status.style.color =
                "#e56b7a";

        }

        else {

            status.innerText =
                "● Election Active";

            status.style.color =
                "#36d399";

        }


    } catch (error) {

        console.error(error);

    }
}


/* =====================================================
   MESSAGE
===================================================== */

function showMessage(
    id,
    message
) {

    document.getElementById(
        id
    ).innerText = message;
}


/* =====================================================
   ERROR
===================================================== */

function getError(error) {

    if (error.reason) {

        return error.reason;
    }


    if (error.shortMessage) {

        return error.shortMessage;
    }


    return "Transaction failed.";
}