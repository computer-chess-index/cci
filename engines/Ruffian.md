# Engine: Ruffian

Author: Per-Ola Valfridsson

Home: 

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2004-02-01 | 2206<sub>(+18) | 2508<sub>(+17) | 2556<sub>(+23) |  |
| 1.0.5 | 2003-03-19 | 2188 | 2491 | 2533 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ruffian+<version>&body=###%20Engine%20name%0ARuffian%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-14 06:28:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.5", "2.1.0"]
  y-axis "Elo Rating" 2100 --> 2600
  line "STC (8.0+0.08s)" [2188, 2206]
  line "STC (8.0+0.08s)" [2188, 2206]
  line "LTC (60.0+0.60s)" [2491, 2508]
  line "VLTC (2m24s+1.12s)" [2533, 2556]
  line "VLTC (2m24s+1.12s)" [2533, 2556]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2556 | 51 | 132 | 50% | 2554 | 26% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2508 | 32 | 346 | 49% | 2516 | 22% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2206 | 26 | 506 | 50% | 2198 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2533 | 38 | 260 | 48% | 2556 | 22% |
| 1.0.5 | LTC <sub>(60.0+0.60s)</sub> | 2491 | 15 | 1464 | 50% | 2492 | 24% |
| 1.0.5 | STC <sub>(8.0+0.08s)</sub> | 2188 | 16 | 1560 | 47% | 2249 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |