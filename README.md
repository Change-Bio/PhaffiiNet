# K. phaffii

*Keep this repository confidential for now please, as it contains information that has not yet been reviewed by Change Bio's lawyers and therefore could be harmful to CB's commercial interests*

This repository collects the current information around the hoc1tr strain of K. phaffii being distributed by Change Bio and others.
The goal is for it to act as a guide to what the strain is, who has it, what data has been collected using it so far, and what would be useful to have next.

## What are the strains?
We (Change Bio) received the YB-4290 strain of Komagataella phaffii from the ARS collection (NRRL) - we're calling this one PhaffiiNet-1 (PN-1) but it can also be called the type strain.
We followed the steps given by Claes et al., 2024 for making their NCYC 2543 hoc1tr-1 strain.
The genetic elements used are in the `sequences' folder and the workflow is represented in the OpenCloning file: [YB-4290_hoc1tr.zip](YB-4290_hoc1tr.zip).
To view this file visit [https://opencloning.org/](https://opencloning.org/), select File->Load cloning history from File, and upload the .zip archive.
We've then called this strain PhaffiiNet-2 (PN-2)

Briefly, we used a double-crossover with a split Noursethricin antibiotic marker to replace the native hoc1 gene in the strain with the version with a premature stop codon that is found in Y-11430.
The selection region of the integrated sequence was floxed, and so we transiently expressed cre recombinase using an episomal genetic element with Zeocin selection to "flip out" the selection, leaving only a lox scar.
After passaging on non-selective media, we confirmed susceptibility to both Noursethiricin and Zeocin as an indication that the cre-recombination had happened and the episomal plasmid had been lost.
We then carried out sequencing of an amplicon amplified from the genome region using colony PCR around the hoc1 gene to confirm that the truncation had occured.
We have not yet carried out whole-genome sequencing of the strain (see "Outstanding To-dos").

## Why are you doing this?
We are a protein manufacturer that uses our proprietary strains of K. phaffii and process to make our customers' proteins.
When starting the company and looking to onboard a base strain of K. phaffii our eyes were opened by the OpenPichia paper [Claes et al., 2024](https://doi.org/10.1038/s41564-023-01574-w).
We would like to say an enormous thank you to the authors of that paper and the related paper [Offei et al., 2022](https://doi.org/10.1371/journal.pbio.3001877) for their work in piecing together the story of what we call the "Industrial strain" of K. phaffii - CBS7435/Y-11430. 
Unfortunately we found the terms of distribution of the OpenPichia strain too restrictive for commercial use, and so we replicated their construction of the strain in our lab.
As a business, we're uniquely positioned to be able to make the decision to release the strain under the OpenMTA without the encumbrance of university TTO etc., so to support the Pichia community (and to grow the community in future) we've released it.

## Where can I get it?
You can email us at hello@changebio.uk and we can send you the MTA, or you can look at the list of people and emails from [the bionet](kphaffii_bionet.csv) and pick your best option from there.
We just ask that you pay for shipping and deal with customs, and have patience with us as we aren't a strain collection!

## Under what conditions is it distributed?
We distribute it under the [OpenMTA](https://doi.org/10.1038/nbt.4263), for free, and you can do whatever you want with it.
Clearly it's nice if you acknowledge where it came from, but we really really don't want any strings attached at all. *NB April 2025: please don't acknowledge us for now we're keeping it on the downlow at the moment!*
If you get it from someone else, it's up to them, but it will originally have come from us under the OpenMTA!

## What is the FTO status?
The request for the strain to the ARS Collection was placed on the 3rd May 2024 by Noah Sprent of Change Bio.
A copy of the ordering form with personal details removed is found in [NRRL_Order_Form_anonymised.pdf](NRRL_Order_Form_anonymised.pdf).
The text relevant to FTO in this document is:

> The above listed microorganism is provided under the following terms:
1. Recipient shall acknowledge the contribution of ARS to any work reported that uses this microorganism.
2. Any third party requesting a sample shall be referred to ARS

Therefore, any third party who wishes for a sample of strain YB-4290 should contact the ARS instead of Change Bio.

CB paid for shipping through provision of a FEDEX shipping label.
As the organism was not Risk Group 2, an MTA was not required inline with the ARS collection policy.
Therefore, the only relevant text on the website related to obligations of CB were:
> Is there a restriction on use of Strains?
While the NRRL has no restrictions on the use of the strains in the open or patent collection that have been patented or no longer fall under patent regulations, that does not exclude the possibility that other patent applications may have been filed for the use of this isolate or patents/applications that claim using strains of this type for a particular purpose or process. While the strain itself may not be currently patented, we really cannot provide any guidance on freedom to operate; that would depend upon how you wish to use the strain and what patents/patent applications already exist and would best be addressed by your intellectual property counsel. The only restriction we do have that is we do not allow third party distribution of strains. Any third party requesting a sample shall be referred to ARS NRRL Culture Collection. NRRL is a publicly funded collection and it is important that we document our impact to ensure continued funding. If at any point any of the strains lead to a discovery of innovation, we ask that you periodically update us on the use of these strains. This will allow us to more accurately quantify our impact.

> We request that recipients acknowledge the contribution of the ARS Culture Collection to any work using microorganisms from the culture collection by including the following text “Microbial strains used in this work were provided by the USDA-ARS Culture Collection (NRRL)”
The closest date archived by the Waybackmachine to when the strain was ordered is [10th May 2024](https://web.archive.org/web/20240510100916/https://nrrl.ncaur.usda.gov/).

Therefore, while CB are not able to redistribute the original YB-4290 strain, we gratefully ackowledge the contribution of the ARS Culture collection to this work: Microbial strains used in this work were provided by the USDA-ARS Culture Collection (NRRL).

Change Bio are not able to warrant any Freedom to Operate of this strain.
We also do not guarentee that the information above is complete.
Anyone using this strain should carry out their own FTO investigation.

## Outstanding to-dos:
- Obviously we want to be able to warrant FTO. Can we crowd-fund some work from lawyers to carry out a proper FTO investigation and get some documentation put in this repo?
- We need to do a whole-genome sequence, preferably more than one, to confirm the genotype.
- Are there killer plasmids present in the strain? Connected to whole-genome sequencing
- Change Bio have carried out extensive testing of the strain in-house, but we aren't able to share the results of this work. It would be useful to the community of others could reproduce some of the findings shown in the OpenPichia paper using this strain.
- Change Bio have in-house strain modifications for protein production etc., which also cannot be shared, however the community may find it useful to create a library of useful mutants etc. from this strain.
