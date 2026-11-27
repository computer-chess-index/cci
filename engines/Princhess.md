# Engine: Princhess

Author: Lana Samson

Home: https://github.com/princesslana/princhess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2916<sub>(+55) | 3150<sub>(+46) | 3206<sub>(+47) |  |
| 0.21.0 | 2025-10-13 | 2861 | 3104 | 3159 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2878<sub>(+43) | 3129<sub>(+54) | 3197<sub>(+43) |  |
| 0.21.0 | 2025-10-13 | 2835 | 3075 | 3154 |  |
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

Generated: 2026-11-27 05:41:44

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.21.0", "0.22.0"]
  y-axis "Elo Rating" 2800 --> 3300
  line "E1: STC (8.0+0.08s)" [2861, 2916]
  line "E1: LTC (60.0+0.60s)" [3104, 3150]
  line "E1: VLTC (2m24s+1.12s)" [3159, 3206]
  line "P1: STC (8.0+0.08s)" [2835, 2878]
  line "P1: LTC (60.0+0.60s)" [3075, 3129]
  line "P1: VLTC (2m24s+1.12s)" [3154, 3197]
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
|  |  | P1 | 3197 | 28 | 350 | 51% | 3194 | 56% |
|  |  | E1 | 3206 | 25 | 438 | 50% | 3208 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3105 | 30 | 308 | 50% | 3106 | 54% |
|  |  | P1 | 3129 | 30 | 324 | 48% | 3147 | 52% |
|  |  | E1 | 3150 | 25 | 442 | 51% | 3140 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2873 | 32 | 296 | 49% | 2885 | 41% |
|  |  | P1 | 2878 | 29 | 348 | 51% | 2874 | 45% |
|  |  | E1 | 2916 | 26 | 466 | 50% | 2919 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.21.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3159 | 49 | 130 | 57% | 3066 | 42% |
|  |  | T1 | 3123 | 24 | 504 | 50% | 3124 | 51% |
|  |  | P1 | 3154 | 59 | 88 | 56% | 3052 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3104 | 43 | 168 | 54% | 3062 | 43% |
|  |  | T1 | 3086 | 23 | 542 | 50% | 3082 | 50% |
|  |  | P1 | 3075 | 62 | 90 | 56% | 2951 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2844 | 21 | 728 | 51% | 2834 | 38% |
|  |  | P1 | 2835 | 57 | 96 | 54% | 2747 | 40% |
|  |  | E1 | 2861 | 46 | 162 | 53% | 2832 | 31% |