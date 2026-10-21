# Engine: Hobbes

Author: Dan Kelsey

Home: https://github.com/kelseyde/hobbes-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-07-22 | 3436 | 3656 | 3688 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-07-22 | 3573 | 3750 | 3758 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-07-22 | 3426<sub>(+13) | 3563<sub>(+19) | 3587<sub>(+32) |  |
| 2.1 | 2026-05-26 | 3413<sub>(+30) | 3544<sub>(+27) | 3555<sub>(+25) |  |
| 1.0 | 2026-03-05 | 3383 | 3517 | 3530 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Hobbes+<version>&body=###%20Engine%20name%0AHobbes%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-21 04:39:20

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.1", "3.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3383, 3413, 3426]
  line "T1: LTC (60.0+0.60s)" [3517, 3544, 3563]
  line "T1: VLTC (2m24s+1.12s)" [3530, 3555, 3587]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3758 | 48 | 94 | 48% | 3769 | 95% |
|  |  | E1 | 3688 | 39 | 148 | 51% | 3683 | 95% |
|  |  | T1 | 3587 | 29 | 278 | 51% | 3576 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3750 | 45 | 108 | 51% | 3744 | 98% |
|  |  | E1 | 3656 | 38 | 158 | 51% | 3653 | 84% |
|  |  | T1 | 3563 | 25 | 350 | 51% | 3557 | 90% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3436 | 34 | 214 | 47% | 3453 | 75% |
|  |  | T1 | 3426 | 26 | 350 | 49% | 3432 | 76% |
|  |  | P1 | 3573 | 39 | 152 | 49% | 3576 | 80% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3555 | 31 | 232 | 51% | 3549 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3544 | 30 | 260 | 52% | 3530 | 88% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3413 | 28 | 296 | 52% | 3401 | 80% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3530 | 25 | 378 | 51% | 3521 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3517 | 26 | 350 | 51% | 3506 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3383 | 23 | 484 | 53% | 3353 | 73% |