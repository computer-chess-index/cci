# CCI Rating Methodology

## 1. Overview

One of the key questions that motivated the CCI approach of cross-linking different time controls was: **How can a time control with a lower time budget produce higher Elo ratings, even though the available thinking time is shorter?**

This effect can be observed in several rating lists, for example when comparing CCRL Blitz with CCRL 40/15, or when comparing different Lichess time controls.

The straightforward explanation is that these ratings are calculated independently and are not directly linked to a common rating scale. This observation motivated the initial idea behind CCI: to establish a common rating scale by cross-linking different time controls within a single rating system.

CCI is essentially one continuous tournament that started on 2024-09-18. Each engine is represented by three configurations intended to cover different time budgets:

- **STC (Short Time Control):** 8.0 + 0.08 s
- **LTC (Long Time Control):** 60.0 + 0.60 s
- **VLTC (Very Long Time Control):** 2m24s + 1.12 s

Each configuration initially plays against its immediate neighbours in the rating order. Once its approximate position has been established, the opponent range is expanded to include configurations two positions above and below, and subsequently more distant configurations. This approach is intended to establish the rating order efficiently while maintaining links throughout the rating list.

While this approach has proved effective in establishing consistent relationships between different time budgets, initial expectations that cross-linking would also mitigate or even eliminate rating inflation have proved too optimistic. 

The resulting rating lists exhibit a degree of compression that was not anticipated in the initial design. This suggests that the scale of a rating system may depend not only on the rating model itself, but also on the environment in which ratings are generated.

Here, *environment* refers to the combination of factors influencing the resulting ratings, including the engine pool, match selection, hardware, time controls, and rating methodology. The extent to which these factors contribute to scale compression or dilation is not yet fully understood.

## 2. Match Calculations

Matches are run using `cutechess-cli`.

The opening book `8moves_v3.pgn` is used with the `random` opening selection policy. Each selected opening is played in a pair of games, with colours reversed between the two games.

Pondering is disabled, and each engine is restricted to a single thread.

## 3. Hardware

The following hardware configurations are used for the respective rating systems:

- **P1:** Intel Core Ultra 7 265T, P-core
- **E1:** Intel Core Ultra 7 265T, E-core
- **T1:** Intel Core i5-7500T, 2.70 GHz

Each hardware configuration represents a separate rating environment, and the corresponding rating lists are calculated independently.

P1 and E1 use different core types of the same processor model. Comparing and eventually combining these lists is one of the next methodological challenges. This work is intended as an intermediate step towards a more general rating approach that accounts for different hardware environments while maintaining meaningful relationships between their ratings.

## 4. Rating Calculation

Ratings are calculated using BayesElo. A `RandomMover` serves as the anchor and is assigned an Elo rating of 0.

A scale factor of 1.35 is applied to bring the resulting ratings closer to established rating values. The factor is an empirically motivated choice rather than the result of a systematic calibration procedure. Its suitability across different rating environments has not yet been established.

An initial attempt to assess the external validity of CCI ratings by aligning them with Lichess ratings is documented in [CCI Discussion #2](https://github.com/computer-chess-index/cci/discussions/2). As these experiments did not demonstrate a meaningful improvement over the existing settings, the current factor has been retained.

Establishing a robust empirical basis for the rating scale, including its relationship to external rating systems and its dependence on the rating environment, remains one of the main methodological challenges of CCI.

## 5. Engine Inclusion and AI-Use Transparency

There is currently no explicit, formal policy defining which engines are eligible for inclusion in CCI.

With the growing use of AI-assisted development, as well as the existence of clones and derivatives, rating list maintainers may be expected to distinguish between engines considered legitimate and those considered problematic.

I do not consider myself sufficiently qualified to make such judgements consistently, nor do I intend to assume the role of a gatekeeper for other developers' work.

Instead, CCI aims to provide a transparent and neutral framework in which relevant information can be disclosed and evaluated by users. To support this, a mechanism has been established for submitting and displaying declarations about AI usage during engine development.

Declarations can be submitted through the [AI Usage Declaration issue template](https://github.com/computer-chess-index/cci/issues/new?template=ai-usage-declaration.yml&title=%5BAI%20Usage%20Declaration%5D%20).

This approach prioritises transparency over subjective judgements about development methods. It does not, by itself, establish the accuracy of submitted declarations or resolve every question concerning engine eligibility.

## 6. Limitations and Open Questions

Several methodological questions remain unresolved:

- **Rating scale calibration:** The appropriate rating scale and its dependence on the rating environment remain insufficiently understood.
- **External validity:** The relationship between CCI ratings and ratings from independent systems, such as Lichess or CCRL, is not yet established with sufficient confidence.
- **Scale compression:** The causes and extent of rating compression or dilation across different rating systems require further investigation.
- **Hardware effects:** Ratings obtained on different hardware configurations are not necessarily directly comparable without considering their respective performance characteristics.
- **Experimental design:** The effects of opponent selection, time controls, opening books, and the composition of the engine pool on the resulting ratings require continued evaluation.

These limitations are not considered resolved. They define important areas for further research and should be taken into account when interpreting CCI ratings.
