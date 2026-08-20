# Engine: Prophet

Author: James Swafford

Home: https://github.com/jswaff/prophet

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2101<sub>(-58) | 2376<sub>(-42) | 2487<sub>(-5) |  |
| 5.1 | 2025-09-16 | 2159 | 2418 | 2492 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Prophet+<version>&body=###%20Engine%20name%0AProphet%0A%0A###%20Version%0A5.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-20 06:28:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.1", "5.2"]
  y-axis "Elo Rating" 2100 --> 2500
  line "STC (8.0+0.08s)" [2159, 2101]
  line "STC (8.0+0.08s)" [2159, 2101]
  line "LTC (60.0+0.60s)" [2418, 2376]
  line "VLTC (2m24s+1.12s)" [2492, 2487]
  line "VLTC (2m24s+1.12s)" [2492, 2487]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2487 | 29 | 422 | 48% | 2503 | 26% |
| 5.2 | LTC <sub>(60.0+0.60s)</sub> | 2376 | 28 | 420 | 48% | 2390 | 30% |
| 5.2 | STC <sub>(8.0+0.08s)</sub> | 2101 | 32 | 340 | 51% | 2082 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2492 | 30 | 380 | 48% | 2523 | 26% |
| 5.1 | LTC <sub>(60.0+0.60s)</sub> | 2418 | 28 | 416 | 49% | 2431 | 30% |
| 5.1 | STC <sub>(8.0+0.08s)</sub> | 2159 | 27 | 482 | 51% | 2153 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |