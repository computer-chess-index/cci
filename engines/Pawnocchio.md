# Engine: Pawnocchio

Author: Jonathan Hallström

Home: https://github.com/JonathanHallstrom/pawnocchio

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-29 | 3484 | 3646 | 3664 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-29 | 3588 | 3704 | 3735 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-29 | 3480<sub>(+94) | 3569<sub>(+17) | 3600<sub>(+37) |  |
| 1.9.2 | 2026-01-15 | 3386<sub>(+10) | 3552<sub>(+8) | 3563<sub>(+10) |  |
| 1.9.1 | 2026-01-12 | 3376<sub>(-11) | 3544<sub>(+16) | 3553<sub>(-10) |  |
| 1.9 | 2026-01-03 | 3387 | 3528 | 3563 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pawnocchio+<version>&body=###%20Engine%20name%0APawnocchio%0A%0A###%20Version%0A2.0.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-19 04:41:13

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9", "1.9.1", "1.9.2", "2.0.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3387, 3376, 3386, 3480]
  line "T1: LTC (60.0+0.60s)" [3528, 3544, 3552, 3569]
  line "T1: VLTC (2m24s+1.12s)" [3563, 3553, 3563, 3600]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3600 | 27 | 306 | 53% | 3583 | 90% |
|  |  | P1 | 3735 | 49 | 92 | 52% | 3725 | 92% |
|  |  | E1 | 3664 | 40 | 140 | 51% | 3657 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3569 | 25 | 360 | 50% | 3567 | 90% |
|  |  | P1 | 3704 | 44 | 112 | 50% | 3702 | 94% |
|  |  | E1 | 3646 | 34 | 196 | 51% | 3644 | 90% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3588 | 37 | 164 | 50% | 3590 | 87% |
|  |  | E1 | 3484 | 31 | 256 | 47% | 3506 | 77% |
|  |  | T1 | 3480 | 24 | 428 | 51% | 3472 | 79% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3563 | 25 | 380 | 51% | 3559 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3552 | 25 | 372 | 51% | 3548 | 88% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3386 | 22 | 518 | 49% | 3391 | 79% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3553 | 35 | 188 | 49% | 3563 | 91% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3544 | 35 | 186 | 51% | 3537 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3376 | 35 | 208 | 51% | 3366 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3563 | 35 | 192 | 53% | 3533 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3528 | 33 | 224 | 53% | 3487 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3387 | 34 | 224 | 54% | 3341 | 71% |