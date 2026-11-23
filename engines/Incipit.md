# Engine: Incipit

Author: Adam Twiss

Home: https://github.com/adamtwiss/incipit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3463<sub>(+83) | 3619<sub>(+20) | 3664<sub>(+47) |  |
| 0.5.0 | 2026-10-17 | 3380 | 3599 | 3617 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3472<sub>(+66) | 3560<sub>(+39) | 3591<sub>(+42) |  |
| 0.5.0 | 2026-10-17 | 3406 | 3521 | 3549 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-10-17 | 3406 | 3521 | 3549 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Incipit+<version>&body=###%20Engine%20name%0AIncipit%0A%0A###%20Version%0A0.6.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-23 05:39:11

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3380, 3463]
  line "E1: LTC (60.0+0.60s)" [3599, 3619]
  line "E1: VLTC (2m24s+1.12s)" [3617, 3664]
  line "P1: STC (8.0+0.08s)" [3406, 3472]
  line "P1: LTC (60.0+0.60s)" [3521, 3560]
  line "P1: VLTC (2m24s+1.12s)" [3549, 3591]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3591 | 48 | 100 | 50% | 3592 | 84% |
|  |  | E1 | 3664 | 32 | 214 | 51% | 3659 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3560 | 43 | 124 | 52% | 3549 | 82% |
|  |  | E1 | 3619 | 34 | 202 | 51% | 3611 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3472 | 43 | 128 | 51% | 3464 | 79% |
|  |  | E1 | 3463 | 29 | 290 | 50% | 3460 | 72% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3549 | 36 | 212 | 62% | 3390 | 69% |
|  |  | E1 | 3617 | 33 | 246 | 59% | 3475 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3521 | 42 | 164 | 64% | 3262 | 69% |
|  |  | E1 | 3599 | 33 | 256 | 57% | 3420 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3406 | 38 | 204 | 60% | 3190 | 64% |
|  |  | E1 | 3380 | 31 | 304 | 57% | 3225 | 61% |