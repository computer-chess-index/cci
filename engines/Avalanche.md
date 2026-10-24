# Engine: Avalanche

Author: Yinuo Huang

Home: https://github.com/SnowballSH/Avalanche

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0.0 | 2026-10-11 | 3303<sub>(+130) | 3542<sub>(+58) | 3610<sub>(+73) |  |
| 4.0.0 | 2026-08-08 | 3173 | 3484 | 3537 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0.0 | 2026-10-11 | 3399<sub>(+129) | 3602<sub>(+77) | 3672<sub>(+99) |  |
| 4.0.0 | 2026-08-08 | 3270 | 3525 | 3573 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-08-08 | 3194<sub>(+289) | 3395<sub>(+194) | 3448<sub>(+211) |  |
| 3.0.0 | 2026-06-25 | 2905 | 3201 | 3237 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Avalanche+<version>&body=###%20Engine%20name%0AAvalanche%0A%0A###%20Version%0A4.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-24 04:36:16

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "5.0.0"]
  y-axis "Elo Rating" 3100 --> 3700
  line "E1: STC (8.0+0.08s)" [3173, 3303]
  line "E1: LTC (60.0+0.60s)" [3484, 3542]
  line "E1: VLTC (2m24s+1.12s)" [3537, 3610]
  line "P1: STC (8.0+0.08s)" [3270, 3399]
  line "P1: LTC (60.0+0.60s)" [3525, 3602]
  line "P1: VLTC (2m24s+1.12s)" [3573, 3672]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "T1: STC (8.0+0.08s)" [2905, 3194]
  line "T1: LTC (60.0+0.60s)" [3201, 3395]
  line "T1: VLTC (2m24s+1.12s)" [3237, 3448]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3672 | 39 | 154 | 49% | 3679 | 80% |
|  |  | E1 | 3610 | 37 | 172 | 51% | 3600 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3602 | 43 | 130 | 52% | 3594 | 75% |
|  |  | E1 | 3542 | 30 | 286 | 53% | 3517 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3399 | 37 | 192 | 48% | 3410 | 65% |
|  |  | E1 | 3303 | 33 | 242 | 50% | 3298 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3448 | 26 | 370 | 52% | 3432 | 79% |
|  |  | P1 | 3573 | 36 | 178 | 48% | 3582 | 81% |
|  |  | E1 | 3537 | 31 | 252 | 50% | 3540 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3525 | 39 | 164 | 50% | 3522 | 73% |
|  |  | E1 | 3484 | 33 | 244 | 50% | 3486 | 64% |
|  |  | T1 | 3395 | 28 | 304 | 51% | 3384 | 75% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3270 | 37 | 204 | 47% | 3294 | 55% |
|  |  | E1 | 3173 | 30 | 304 | 44% | 3217 | 59% |
|  |  | T1 | 3194 | 29 | 312 | 49% | 3204 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3237 | 32 | 262 | 53% | 3208 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3201 | 34 | 240 | 53% | 3164 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2905 | 31 | 320 | 51% | 2894 | 41% |