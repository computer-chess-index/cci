# Engine: Peras

Author: Jesse Sissala

Home: https://github.com/FirePlank/Peras

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3231<sub>(-8) | 3514<sub>(+43) | 3560<sub>(+26) |  |
| 3.0.0 | 2026-09-13 | 3239 | 3471 | 3534 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3428<sub>(-6) | 3646<sub>(-8) | 3702<sub>(+31) |  |
| 3.0.0 | 2026-09-13 | 3434 | 3654 | 3671 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-09-13 | 3283 | 3488 | 3521 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Peras+<version>&body=###%20Engine%20name%0APeras%0A%0A###%20Version%0A3.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-17 04:41:15

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "3.6.1"]
  y-axis "Elo Rating" 3200 --> 3800
  line "E1: STC (8.0+0.08s)" [3239, 3231]
  line "E1: LTC (60.0+0.60s)" [3471, 3514]
  line "E1: VLTC (2m24s+1.12s)" [3534, 3560]
  line "P1: STC (8.0+0.08s)" [3434, 3428]
  line "P1: LTC (60.0+0.60s)" [3654, 3646]
  line "P1: VLTC (2m24s+1.12s)" [3671, 3702]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3702 | 60 | 64 | 52% | 3692 | 84% |
|  |  | E1 | 3560 | 43 | 128 | 51% | 3553 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3646 | 68 | 48 | 50% | 3644 | 88% |
|  |  | E1 | 3514 | 41 | 140 | 49% | 3519 | 84% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3428 | 41 | 152 | 47% | 3445 | 70% |
|  |  | E1 | 3231 | 39 | 172 | 51% | 3225 | 61% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3521 | 30 | 272 | 52% | 3498 | 79% |
|  |  | P1 | 3671 | 36 | 184 | 48% | 3684 | 82% |
|  |  | E1 | 3534 | 33 | 220 | 48% | 3548 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3488 | 34 | 216 | 52% | 3464 | 78% |
|  |  | P1 | 3654 | 36 | 188 | 48% | 3665 | 79% |
|  |  | E1 | 3471 | 31 | 248 | 47% | 3490 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3283 | 33 | 240 | 52% | 3259 | 62% |
|  |  | P1 | 3434 | 37 | 196 | 49% | 3443 | 59% |
|  |  | E1 | 3239 | 31 | 288 | 49% | 3245 | 60% |