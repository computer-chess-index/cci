# Engine: Dorky

Author: Matt KcKnight

Home: https://github.com/matt-dot-net/dorky-release

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-08-21 | 2310<sub>(+73) | 2650<sub>(+146) | 2745<sub>(+107) |  |
| 5.0 | 2026-08-08 | 2237 | 2504 | 2638 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dorky+<version>&body=###%20Engine%20name%0ADorky%0A%0A###%20Version%0A5.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-27 06:24:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "5.1"]
  y-axis "Elo Rating" 2200 --> 2800
  line "STC (8.0+0.08s)" [2237, 2310]
  line "STC (8.0+0.08s)" [2237, 2310]
  line "LTC (60.0+0.60s)" [2504, 2650]
  line "VLTC (2m24s+1.12s)" [2638, 2745]
  line "VLTC (2m24s+1.12s)" [2638, 2745]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2745 | 32 | 296 | 52% | 2728 | 38% |
| 5.1 | LTC <sub>(60.0+0.60s)</sub> | 2650 | 35 | 280 | 53% | 2622 | 29% |
| 5.1 | STC <sub>(8.0+0.08s)</sub> | 2310 | 39 | 208 | 51% | 2303 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2638 | 34 | 298 | 48% | 2660 | 27% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2504 | 37 | 246 | 50% | 2472 | 29% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2237 | 32 | 336 | 50% | 2222 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |