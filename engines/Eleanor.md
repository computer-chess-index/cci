# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3212<sub>(+37) | 3443<sub>(+19) | 3474<sub>(+27) |  |
| 4.0 | 2026-04-18 | 3175<sub>(+94) | 3424<sub>(+119) | 3447<sub>(+73) |  |
| 3.0 | 2025-12-05 | 3081<sub>(+new) | 3305<sub>(+new) | 3374<sub>(+new) |  |
| 2.0 | 2025-08-23 |  |  |  |  |
| 1.0 | 2025-06-02 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Eleanor+<version>&body=###%20Engine%20name%0AEleanor%0A%0A###%20Version%0A4.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-17 06:24:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3081, 3175, 3212]
  line "STC (8.0+0.08s)" [3081, 3175, 3212]
  line "LTC (60.0+0.60s)" [3305, 3424, 3443]
  line "VLTC (2m24s+1.12s)" [3374, 3447, 3474]
  line "VLTC (2m24s+1.12s)" [3374, 3447, 3474]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3474 | 26 | 340 | 49% | 3482 | 81% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3443 | 28 | 304 | 49% | 3447 | 78% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3212 | 30 | 304 | 50% | 3206 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3447 | 29 | 284 | 50% | 3448 | 81% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3424 | 30 | 280 | 50% | 3421 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3175 | 32 | 264 | 50% | 3173 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3374 | 26 | 368 | 50% | 3375 | 68% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3305 | 27 | 358 | 52% | 3276 | 71% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3081 | 24 | 496 | 52% | 3052 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |