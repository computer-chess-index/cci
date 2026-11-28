# Engine: Fructosita

Author: Antonio Espinosa

Home: https://github.com/josantesbo/Fructosita-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.4.0 | 2026-11-25 | 2585<sub>(-19) | 2915<sub>(+42) | 2986<sub>(+11) |  |
| 3.3.0 | 2026-11-03 | 2604 | 2873 | 2975 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.4.0 | 2026-11-25 | 2610<sub>(+99) | 2826<sub>(-52) | 2946<sub>(+11) |  |
| 3.3.0 | 2026-11-03 | 2511 | 2878 | 2935 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2026-11-03 | 2511 | 2878 | 2935 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Fructosita+<version>&body=###%20Engine%20name%0AFructosita%0A%0A###%20Version%0A3.4.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:38:43

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.3.0", "3.4.0"]
  y-axis "Elo Rating" 2500 --> 3000
  line "E1: STC (8.0+0.08s)" [2604, 2585]
  line "E1: LTC (60.0+0.60s)" [2873, 2915]
  line "E1: VLTC (2m24s+1.12s)" [2975, 2986]
  line "P1: STC (8.0+0.08s)" [2511, 2610]
  line "P1: LTC (60.0+0.60s)" [2878, 2826]
  line "P1: VLTC (2m24s+1.12s)" [2935, 2946]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2946 | 42 | 172 | 51% | 2939 | 42% |
|  |  | E1 | 2986 | 36 | 232 | 47% | 3008 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2826 | 96 | 36 | 46% | 2869 | 25% |
|  |  | E1 | 2915 | 40 | 192 | 53% | 2890 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2610 | 43 | 182 | 57% | 2549 | 30% |
|  |  | E1 | 2585 | 47 | 144 | 49% | 2592 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2935 | 40 | 202 | 50% | 2938 | 35% |
|  |  | E1 | 2975 | 30 | 368 | 51% | 2967 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2878 | 38 | 222 | 55% | 2778 | 42% |
|  |  | E1 | 2873 | 29 | 414 | 55% | 2765 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2511 | 37 | 272 | 59% | 2304 | 30% |
|  |  | E1 | 2604 | 32 | 392 | 61% | 2304 | 26% |