# Engine: chess4j

Author: James Swafford

Home: https://github.com/jswaff/chess4j

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3 | 2026-06-06 | 1854<sub>(+9) | 2167<sub>(-31) | 2291<sub>(+7) |  |
| 6.2 | 2025-09-16 | 1845 | 2198 | 2284 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+chess4j+<version>&body=###%20Engine%20name%0Achess4j%0A%0A###%20Version%0A6.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-12 07:48:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.2", "6.3"]
  y-axis "Elo Rating" 1800 --> 2300
  line "STC (8.0+0.08s)" [1845, 1854]
  line "STC (8.0+0.08s)" [1845, 1854]
  line "LTC (60.0+0.60s)" [2198, 2167]
  line "VLTC (2m24s+1.12s)" [2284, 2291]
  line "VLTC (2m24s+1.12s)" [2284, 2291]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2291 | 32 | 332 | 50% | 2290 | 29% |
| 6.3 | LTC <sub>(60.0+0.60s)</sub> | 2167 | 33 | 318 | 50% | 2161 | 23% |
| 6.3 | STC <sub>(8.0+0.08s)</sub> | 1854 | 31 | 370 | 48% | 1874 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2284 | 27 | 468 | 49% | 2294 | 30% |
| 6.2 | LTC <sub>(60.0+0.60s)</sub> | 2198 | 27 | 452 | 50% | 2190 | 28% |
| 6.2 | STC <sub>(8.0+0.08s)</sub> | 1845 | 25 | 584 | 51% | 1833 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |