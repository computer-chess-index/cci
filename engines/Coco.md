# Engine: Coco

Author: 

Home: https://github.com/NotKaede-11/Coco-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-11-25 | 2961<sub>(+760) | 3337<sub>(+657) | 3417<sub>(+591) |  |
| 1.5.1 | 2026-09-27 | 2201<sub>(-18) | 2680<sub>(-23) | 2826<sub>(+13) |  |
| 1.5.0 | 2026-09-14 | 2219 | 2703 | 2813 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-11-25 | 2984<sub>(+707) | 3379<sub>(+709) | 3325<sub>(+530) |  |
| 1.5.1 | 2026-09-27 | 2277<sub>(+22) | 2670<sub>(-3) | 2795<sub>(-17) |  |
| 1.5.0 | 2026-09-14 | 2255 | 2673 | 2812 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-09-27 | 2384<sub>(+19) | 2697<sub>(-31) | 2811<sub>(-21) |  |
| 1.5.0 | 2026-09-14 | 2365 | 2728 | 2832 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Coco+<version>&body=###%20Engine%20name%0ACoco%0A%0A###%20Version%0A1.5.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-27 05:37:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5.0", "1.5.1", "2.0.0"]
  y-axis "Elo Rating" 2200 --> 3500
  line "E1: STC (8.0+0.08s)" [2219, 2201, 2961]
  line "E1: LTC (60.0+0.60s)" [2703, 2680, 3337]
  line "E1: VLTC (2m24s+1.12s)" [2813, 2826, 3417]
  line "P1: STC (8.0+0.08s)" [2255, 2277, 2984]
  line "P1: LTC (60.0+0.60s)" [2673, 2670, 3379]
  line "P1: VLTC (2m24s+1.12s)" [2812, 2795, 3325]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5.0", "1.5.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "T1: STC (8.0+0.08s)" [2365, 2384]
  line "T1: LTC (60.0+0.60s)" [2728, 2697]
  line "T1: VLTC (2m24s+1.12s)" [2832, 2811]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3325 | 74 | 52 | 66% | 3187 | 60% |
|  |  | E1 | 3417 | 37 | 200 | 51% | 3393 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3337 | 32 | 256 | 57% | 3260 | 66% |
|  |  | P1 | 3379 | 54 | 88 | 56% | 3310 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2961 | 37 | 228 | 58% | 2876 | 41% |
|  |  | P1 | 2984 | 49 | 132 | 61% | 2862 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2811 | 41 | 190 | 49% | 2816 | 31% |
|  |  | P1 | 2795 | 32 | 330 | 45% | 2816 | 32% |
|  |  | E1 | 2826 | 29 | 394 | 48% | 2851 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2697 | 41 | 194 | 50% | 2699 | 34% |
|  |  | P1 | 2670 | 35 | 272 | 49% | 2691 | 29% |
|  |  | E1 | 2680 | 32 | 316 | 52% | 2662 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2384 | 36 | 280 | 45% | 2435 | 24% |
|  |  | P1 | 2277 | 35 | 296 | 54% | 2242 | 20% |
|  |  | E1 | 2201 | 30 | 400 | 50% | 2207 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2832 | 37 | 238 | 50% | 2824 | 30% |
|  |  | P1 | 2812 | 38 | 212 | 47% | 2846 | 40% |
|  |  | E1 | 2813 | 30 | 378 | 46% | 2853 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2728 | 35 | 260 | 50% | 2726 | 33% |
|  |  | P1 | 2673 | 35 | 276 | 47% | 2709 | 27% |
|  |  | E1 | 2703 | 32 | 332 | 47% | 2727 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2365 | 35 | 280 | 50% | 2361 | 25% |
|  |  | P1 | 2255 | 37 | 274 | 46% | 2299 | 18% |
|  |  | E1 | 2219 | 32 | 356 | 42% | 2326 | 21% |