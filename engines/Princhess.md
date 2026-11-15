# Engine: Princhess

Author: Lana Samson

Home: https://github.com/princesslana/princhess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2916<sub>(+105) | 3147<sub>(+99) | 3205<sub>(+49) |  |
| 0.21.0 | 2025-10-13 | 2811 | 3048 | 3156 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2809<sub>(+5) | 3087<sub>(+82) | 3162<sub>(+137) |  |
| 0.21.0 | 2025-10-13 | 2804 | 3005 | 3025 |  |
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

Generated: 2026-11-15 05:41:16

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.21.0", "0.22.0"]
  y-axis "Elo Rating" 2800 --> 3300
  line "E1: STC (8.0+0.08s)" [2811, 2916]
  line "E1: LTC (60.0+0.60s)" [3048, 3147]
  line "E1: VLTC (2m24s+1.12s)" [3156, 3205]
  line "P1: STC (8.0+0.08s)" [2804, 2809]
  line "P1: LTC (60.0+0.60s)" [3005, 3087]
  line "P1: VLTC (2m24s+1.12s)" [3025, 3162]
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
|  |  | P1 | 3162 | 29 | 330 | 50% | 3159 | 57% |
|  |  | E1 | 3205 | 26 | 414 | 50% | 3202 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3105 | 30 | 308 | 50% | 3106 | 54% |
|  |  | P1 | 3087 | 33 | 272 | 49% | 3105 | 51% |
|  |  | E1 | 3147 | 26 | 410 | 51% | 3137 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2873 | 32 | 296 | 49% | 2885 | 41% |
|  |  | P1 | 2809 | 32 | 290 | 49% | 2819 | 44% |
|  |  | E1 | 2916 | 28 | 394 | 50% | 2913 | 42% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.21.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3156 | 75 | 60 | 63% | 2982 | 37% |
|  |  | T1 | 3123 | 24 | 504 | 50% | 3124 | 51% |
|  |  | P1 | 3025 | 99 | 36 | 53% | 2898 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3048 | 74 | 60 | 55% | 2989 | 40% |
|  |  | T1 | 3086 | 23 | 542 | 50% | 3082 | 50% |
|  |  | P1 | 3005 | 110 | 36 | 58% | 2763 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2811 | 70 | 72 | 51% | 2815 | 35% |
|  |  | T1 | 2844 | 21 | 728 | 51% | 2834 | 38% |
|  |  | P1 | 2804 | 79 | 52 | 60% | 2628 | 38% |