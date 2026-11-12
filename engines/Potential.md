# Engine: Potential

Author: Eren Araz

Home: https://github.com/ProgramciDusunur/Potential

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2664<sub>(-326) | 3113<sub>(+591) | 3217<sub>(+441) |  |
| 3.0.0 | 2025-08-28 | 2990 | 2522 | 2776 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2817<sub>(+238) | 3235<sub>(+658) | 3357<sub>(+550) |  |
| 3.0.0 | 2025-08-28 | 2579 | 2577 | 2807 |  |
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

Generated: 2026-11-12 05:40:51

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "unlocked"]
  y-axis "Elo Rating" 2500 --> 3400
  line "E1: STC (8.0+0.08s)" [2990, 2664]
  line "E1: LTC (60.0+0.60s)" [2522, 3113]
  line "E1: VLTC (2m24s+1.12s)" [2776, 3217]
  line "P1: STC (8.0+0.08s)" [2579, 2817]
  line "P1: LTC (60.0+0.60s)" [2577, 3235]
  line "P1: VLTC (2m24s+1.12s)" [2807, 3357]
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
|  |  | P1 | 3357 | 28 | 356 | 49% | 3366 | 54% |
|  |  | E1 | 3217 | 26 | 434 | 50% | 3216 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3102 | 27 | 416 | 52% | 3081 | 47% |
|  |  | P1 | 3235 | 38 | 200 | 49% | 3247 | 51% |
|  |  | E1 | 3113 | 27 | 408 | 47% | 3140 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2751 | 30 | 350 | 51% | 2741 | 36% |
|  |  | P1 | 2817 | 32 | 318 | 51% | 2804 | 33% |
|  |  | E1 | 2664 | 30 | 390 | 46% | 2687 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2608 | 29 | 416 | 48% | 2626 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2485 | 28 | 416 | 50% | 2485 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2228 | 31 | 352 | 49% | 2225 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2807 | 177 | 8 | 56% | 2776 | 13% |
|  |  | E1 | 2776 | 207 | 4 | 50% | 2776 | 50% |
|  |  | T1 | 2954 | 28 | 404 | 49% | 2962 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2577 | 262 | 4 | 0% | 2890 | 0% |
|  |  | E1 | 2522 | 246 | 8 | 0% | 2967 | 0% |
|  |  | T1 | 2865 | 29 | 380 | 49% | 2873 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2579 | 208 | 8 | 0% | 2944 | 0% |
|  |  | E1 | 2990 | 207 | 12 | 33% | 3105 | 0% |
|  |  | T1 | 2545 | 27 | 452 | 49% | 2549 | 30% |