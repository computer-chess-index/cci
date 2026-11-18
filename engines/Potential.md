# Engine: Potential

Author: Eren Araz

Home: https://github.com/ProgramciDusunur/Potential

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2620<sub>(+247) | 3059<sub>(+232) | 3168<sub>(+222) |  |
| 3.0.0 | 2025-08-28 | 2373 | 2827 | 2946 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2660<sub>(+243) | 3044<sub>(+353) | 3150<sub>(+222) |  |
| 3.0.0 | 2025-08-28 | 2417 | 2691 | 2928 |  |
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

Generated: 2026-11-18 05:41:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "unlocked"]
  y-axis "Elo Rating" 2300 --> 3200
  line "E1: STC (8.0+0.08s)" [2373, 2620]
  line "E1: LTC (60.0+0.60s)" [2827, 3059]
  line "E1: VLTC (2m24s+1.12s)" [2946, 3168]
  line "P1: STC (8.0+0.08s)" [2417, 2660]
  line "P1: LTC (60.0+0.60s)" [2691, 3044]
  line "P1: VLTC (2m24s+1.12s)" [2928, 3150]
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
| unlocked | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3168 | 26 | 438 | 50% | 3166 | 48% |
|  |  | T1 | 3144 | 28 | 356 | 50% | 3141 | 56% |
|  |  | P1 | 3150 | 27 | 376 | 49% | 3162 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3059 | 26 | 444 | 46% | 3092 | 46% |
|  |  | T1 | 3102 | 27 | 416 | 52% | 3081 | 47% |
|  |  | P1 | 3044 | 36 | 226 | 49% | 3056 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2751 | 30 | 350 | 51% | 2741 | 36% |
|  |  | P1 | 2660 | 31 | 334 | 52% | 2638 | 33% |
|  |  | E1 | 2620 | 29 | 406 | 45% | 2645 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2608 | 29 | 416 | 48% | 2626 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2485 | 28 | 416 | 50% | 2485 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2228 | 31 | 352 | 49% | 2225 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2954 | 28 | 404 | 49% | 2962 | 34% |
|  |  | P1 | 2928 | 72 | 60 | 48% | 2940 | 33% |
|  |  | E1 | 2946 | 77 | 56 | 44% | 3009 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2865 | 29 | 380 | 49% | 2873 | 34% |
|  |  | P1 | 2691 | 73 | 72 | 60% | 2518 | 25% |
|  |  | E1 | 2827 | 62 | 96 | 49% | 2858 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2545 | 27 | 452 | 49% | 2549 | 30% |
|  |  | P1 | 2417 | 81 | 64 | 48% | 2473 | 17% |
|  |  | E1 | 2373 | 59 | 120 | 35% | 2570 | 20% |