# Engine: Princhess

Author: Lana Samson

Home: https://github.com/princesslana/princhess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2924<sub>(+97) | 3152<sub>(+62) | 3212<sub>(+76) |  |
| 0.21.0 | 2025-10-13 | 2827 | 3090 | 3136 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2855<sub>(+33) | 3112<sub>(+74) | 3182<sub>(+57) |  |
| 0.21.0 | 2025-10-13 | 2822 | 3038 | 3125 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2873<sub>(+29) | 3105<sub>(+19) | 3177<sub>(+54) |  |
| 0.21.0 | 2025-10-13 | 2844 | 3086 | 3123 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Princhess+<version>&body=###%20Engine%20name%0APrinchess%0A%0A###%20Version%0A0.22.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:41:21

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.21.0", "0.22.0"]
  y-axis "Elo Rating" 2800 --> 3300
  line "E1: STC (8.0+0.08s)" [2827, 2924]
  line "E1: LTC (60.0+0.60s)" [3090, 3152]
  line "E1: VLTC (2m24s+1.12s)" [3136, 3212]
  line "P1: STC (8.0+0.08s)" [2822, 2855]
  line "P1: LTC (60.0+0.60s)" [3038, 3112]
  line "P1: VLTC (2m24s+1.12s)" [3125, 3182]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.21.0", "0.22.0"]
  y-axis "Elo Rating" 2800 --> 3200
  line "T1: STC (8.0+0.08s)" [2844, 2873]
  line "T1: LTC (60.0+0.60s)" [3086, 3105]
  line "T1: VLTC (2m24s+1.12s)" [3123, 3177]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.22.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3177 | 33 | 256 | 50% | 3174 | 56% |
|  |  | P1 | 3182 | 28 | 346 | 51% | 3175 | 57% |
|  |  | E1 | 3212 | 26 | 430 | 50% | 3212 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3105 | 30 | 308 | 50% | 3106 | 54% |
|  |  | P1 | 3112 | 32 | 288 | 49% | 3129 | 51% |
|  |  | E1 | 3152 | 25 | 438 | 51% | 3143 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2873 | 32 | 296 | 49% | 2885 | 41% |
|  |  | P1 | 2855 | 30 | 332 | 50% | 2855 | 44% |
|  |  | E1 | 2924 | 27 | 422 | 50% | 2923 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.21.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3123 | 24 | 504 | 50% | 3124 | 51% |
|  |  | P1 | 3125 | 64 | 76 | 56% | 3020 | 46% |
|  |  | E1 | 3136 | 60 | 90 | 57% | 3036 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3086 | 23 | 542 | 50% | 3082 | 50% |
|  |  | P1 | 3038 | 67 | 78 | 55% | 2912 | 31% |
|  |  | E1 | 3090 | 60 | 88 | 57% | 3021 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2844 | 21 | 728 | 51% | 2834 | 38% |
|  |  | P1 | 2822 | 60 | 88 | 55% | 2723 | 38% |
|  |  | E1 | 2827 | 59 | 102 | 51% | 2827 | 29% |