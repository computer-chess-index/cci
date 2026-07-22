# Engine: Icarus

Author: 

Home: https://github.com/Sp00ph/icarus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3318<sub>(-6) | 3483<sub>(+4) | 3505<sub>(-14) |  |
| 1.1 | 2026-06-05 | 3324<sub>(+23) | 3479<sub>(+35) | 3519<sub>(+31) |  |
| 1.0 | 2026-04-26 | 3301 | 3444 | 3488 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Icarus+<version>&body=###%20Engine%20name%0AIcarus%0A%0A###%20Version%0A1.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-22 06:26:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.1.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3301, 3324, 3318]
  line "STC (8.0+0.08s)" [3301, 3324, 3318]
  line "LTC (60.0+0.60s)" [3444, 3479, 3483]
  line "VLTC (2m24s+1.12s)" [3488, 3519, 3505]
  line "VLTC (2m24s+1.12s)" [3488, 3519, 3505]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3505 | 37 | 172 | 50% | 3502 | 85% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3483 | 37 | 170 | 50% | 3482 | 84% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 3318 | 36 | 184 | 49% | 3324 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3519 | 28 | 300 | 50% | 3518 | 86% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3479 | 24 | 404 | 52% | 3465 | 81% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3324 | 28 | 324 | 51% | 3320 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3488 | 27 | 334 | 50% | 3486 | 83% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3444 | 26 | 338 | 51% | 3438 | 83% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3301 | 27 | 348 | 51% | 3294 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |