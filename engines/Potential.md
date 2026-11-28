# Engine: Potential

Author: Eren Araz

Home: https://github.com/ProgramciDusunur/Potential

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2626<sub>(+281) | 3056<sub>(+230) | 3166<sub>(+203) |  |
| 3.0.0 | 2025-08-28 | 2345 | 2826 | 2963 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2697<sub>(+312) | 3079<sub>(+357) | 3175<sub>(+213) |  |
| 3.0.0 | 2025-08-28 | 2385 | 2722 | 2962 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2751<sub>(+523) | 3102<sub>(+617) | 3144<sub>(+536) |  |
| 1.1.0 | 2026-05-16 | 2228<sub>(-317) | 2485<sub>(-380) | 2608<sub>(-346) |  |
| 3.0.0 | 2025-08-28 | 2545 | 2865 | 2954 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Potential+<version>&body=###%20Engine%20name%0APotential%0A%0A###%20Version%0Aunlocked" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:41:30

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "unlocked"]
  y-axis "Elo Rating" 2300 --> 3200
  line "E1: STC (8.0+0.08s)" [2345, 2626]
  line "E1: LTC (60.0+0.60s)" [2826, 3056]
  line "E1: VLTC (2m24s+1.12s)" [2963, 3166]
  line "P1: STC (8.0+0.08s)" [2385, 2697]
  line "P1: LTC (60.0+0.60s)" [2722, 3079]
  line "P1: VLTC (2m24s+1.12s)" [2962, 3175]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "1.1.0", "unlocked"]
  y-axis "Elo Rating" 2200 --> 3200
  line "T1: STC (8.0+0.08s)" [2545, 2228, 2751]
  line "T1: LTC (60.0+0.60s)" [2865, 2485, 3102]
  line "T1: VLTC (2m24s+1.12s)" [2954, 2608, 3144]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| unlocked | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3144 | 28 | 356 | 50% | 3141 | 56% |
|  |  | P1 | 3175 | 27 | 388 | 49% | 3189 | 54% |
|  |  | E1 | 3166 | 25 | 450 | 50% | 3163 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3102 | 27 | 416 | 52% | 3081 | 47% |
|  |  | P1 | 3079 | 33 | 266 | 49% | 3087 | 49% |
|  |  | E1 | 3056 | 24 | 508 | 47% | 3083 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2751 | 30 | 350 | 51% | 2741 | 36% |
|  |  | P1 | 2697 | 30 | 374 | 52% | 2673 | 32% |
|  |  | E1 | 2626 | 28 | 434 | 46% | 2646 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2608 | 29 | 416 | 48% | 2626 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2485 | 28 | 416 | 50% | 2485 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2228 | 31 | 352 | 49% | 2225 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2954 | 28 | 404 | 49% | 2962 | 34% |
|  |  | P1 | 2962 | 61 | 84 | 48% | 2975 | 37% |
|  |  | E1 | 2963 | 53 | 116 | 48% | 2984 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2865 | 29 | 380 | 49% | 2873 | 34% |
|  |  | P1 | 2722 | 59 | 106 | 56% | 2606 | 27% |
|  |  | E1 | 2826 | 55 | 124 | 49% | 2849 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2545 | 27 | 452 | 49% | 2549 | 30% |
|  |  | P1 | 2385 | 56 | 120 | 45% | 2453 | 23% |
|  |  | E1 | 2345 | 48 | 172 | 38% | 2508 | 22% |