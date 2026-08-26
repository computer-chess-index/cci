# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3329<sub>(+5) | 3490<sub>(+7) | 3511<sub>(-2) |  |
| 6.0 | 2024-10-24 | 3324<sub>(+112) | 3483<sub>(+74) | 3513<sub>(+79) |  |
| 5.0 | 2024-05-23 | 3212 | 3409 | 3434 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Starzix+<version>&body=###%20Engine%20name%0AStarzix%0A%0A###%20Version%0A6.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-26 06:29:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3212, 3324, 3329]
  line "STC (8.0+0.08s)" [3212, 3324, 3329]
  line "LTC (60.0+0.60s)" [3409, 3483, 3490]
  line "VLTC (2m24s+1.12s)" [3434, 3513, 3511]
  line "VLTC (2m24s+1.12s)" [3434, 3513, 3511]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3511 | 23 | 422 | 50% | 3511 | 87% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3490 | 23 | 432 | 50% | 3491 | 87% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3329 | 21 | 582 | 49% | 3333 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 12 | 1620 | 50% | 3511 | 85% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3483 | 12 | 1600 | 50% | 3483 | 82% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3324 | 13 | 1628 | 50% | 3325 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3434 | 32 | 236 | 51% | 3429 | 76% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3409 | 32 | 240 | 48% | 3420 | 78% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3212 | 27 | 408 | 53% | 3125 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |