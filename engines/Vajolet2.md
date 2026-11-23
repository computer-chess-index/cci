# Engine: Vajolet2

Author: Marco Belli

Home: https://github.com/elcabesa/vajolet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2746<sub>(-12) | 3133<sub>(+89) | 3205<sub>(+103) |  |
| 3.1 | 2026-04-03 | 2758 | 3044 | 3102 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2788<sub>(-39) | 3094<sub>(+94) | 3181<sub>(+33) |  |
| 3.1 | 2026-04-03 | 2827 | 3000 | 3148 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2865<sub>(+29) | 3137<sub>(+78) | 3186<sub>(+47) |  |
| 3.1 | 2026-04-03 | 2836<sub>(+100) | 3059<sub>(+58) | 3139<sub>(+62) |  |
| 3.0 | 2025-12-21 | 2736 | 3001 | 3077 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Vajolet2+<version>&body=###%20Engine%20name%0AVajolet2%0A%0A###%20Version%0A3.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-23 05:44:16

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2758, 2746]
  line "E1: LTC (60.0+0.60s)" [3044, 3133]
  line "E1: VLTC (2m24s+1.12s)" [3102, 3205]
  line "P1: STC (8.0+0.08s)" [2827, 2788]
  line "P1: LTC (60.0+0.60s)" [3000, 3094]
  line "P1: VLTC (2m24s+1.12s)" [3148, 3181]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3200
  line "T1: STC (8.0+0.08s)" [2736, 2836, 2865]
  line "T1: LTC (60.0+0.60s)" [3001, 3059, 3137]
  line "T1: VLTC (2m24s+1.12s)" [3077, 3139, 3186]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3186 | 27 | 386 | 49% | 3191 | 53% |
|  |  | P1 | 3181 | 31 | 302 | 50% | 3170 | 55% |
|  |  | E1 | 3205 | 26 | 451 | 52% | 3163 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3137 | 27 | 400 | 51% | 3132 | 50% |
|  |  | P1 | 3094 | 32 | 298 | 50% | 3074 | 43% |
|  |  | E1 | 3133 | 27 | 426 | 54% | 3067 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2865 | 25 | 492 | 50% | 2867 | 39% |
|  |  | P1 | 2788 | 33 | 302 | 47% | 2822 | 34% |
|  |  | E1 | 2746 | 27 | 468 | 45% | 2778 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3139 | 29 | 352 | 50% | 3140 | 47% |
|  |  | P1 | 3148 | 89 | 36 | 40% | 3225 | 47% |
|  |  | E1 | 3102 | 61 | 80 | 40% | 3195 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3059 | 27 | 406 | 50% | 3056 | 43% |
|  |  | P1 | 3000 | 79 | 48 | 54% | 2957 | 46% |
|  |  | E1 | 3044 | 58 | 84 | 48% | 3065 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2827 | 61 | 92 | 51% | 2784 | 34% |
|  |  | E1 | 2758 | 61 | 88 | 51% | 2692 | 38% |
|  |  | T1 | 2836 | 28 | 384 | 50% | 2832 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3077 | 31 | 318 | 52% | 3059 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3001 | 29 | 344 | 52% | 2981 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2736 | 29 | 386 | 52% | 2705 | 37% |