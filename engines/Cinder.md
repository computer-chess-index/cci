# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.1 | 2026-08-16 | 3424<sub>(+52) | 3563<sub>(+26) | 3582<sub>(+27) |  |
| 0.5.2 | 2026-07-12 | 3372<sub>(+19) | 3537<sub>(+9) | 3555<sub>(-5) |  |
| 0.5.1 | 2026-07-08 | 3353<sub>(-44) | 3528<sub>(+6) | 3560<sub>(-15) |  |
| 0.5.0 | 2026-07-04 | 3397<sub>(+50) | 3522<sub>(+52) | 3575<sub>(+74) |  |
| 0.4.1 | 2025-12-05 | 3347<sub>(+44) | 3470<sub>(-2) | 3501<sub>(-20) |  |
| 0.4.0 | 2025-12-04 | 3303<sub>(+new) | 3472<sub>(+new) | 3521<sub>(+new) |  |
| 0.3.1 | 2025-08-16 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cinder+<version>&body=###%20Engine%20name%0ACinder%0A%0A###%20Version%0A0.6.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-18 06:23:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2", "0.6.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3303, 3347, 3397, 3353, 3372, 3424]
  line "STC (8.0+0.08s)" [3303, 3347, 3397, 3353, 3372, 3424]
  line "LTC (60.0+0.60s)" [3472, 3470, 3522, 3528, 3537, 3563]
  line "VLTC (2m24s+1.12s)" [3521, 3501, 3575, 3560, 3555, 3582]
  line "VLTC (2m24s+1.12s)" [3521, 3501, 3575, 3560, 3555, 3582]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3582 | 68 | 48 | 52% | 3568 | 92% |
| 0.6.1 | LTC <sub>(60.0+0.60s)</sub> | 3563 | 69 | 46 | 49% | 3568 | 89% |
| 0.6.1 | STC <sub>(8.0+0.08s)</sub> | 3424 | 54 | 84 | 49% | 3432 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3555 | 29 | 264 | 50% | 3555 | 91% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3537 | 25 | 354 | 51% | 3532 | 91% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3372 | 27 | 322 | 49% | 3380 | 83% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 39 | 152 | 49% | 3567 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3528 | 43 | 120 | 50% | 3526 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3353 | 44 | 124 | 49% | 3360 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3575 | 44 | 118 | 50% | 3572 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3522 | 44 | 120 | 52% | 3511 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3397 | 35 | 192 | 48% | 3409 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3501 | 23 | 424 | 50% | 3499 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3470 | 25 | 368 | 50% | 3471 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3347 | 21 | 564 | 49% | 3353 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3521 | 43 | 128 | 54% | 3484 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3472 | 50 | 108 | 56% | 3368 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3303 | 68 | 72 | 65% | 3056 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |