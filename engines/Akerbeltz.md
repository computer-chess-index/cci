# Engine: Akerbeltz

Author: Julen Aristondo

Home: https://github.com/neluj/Akerbeltz

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-04-14 | 1935<sub>(+555) | 2175<sub>(+548) | 2276<sub>(+516) |  |
| 1.0.0 | 2025-12-31 | 1380 | 1627 | 1760 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Akerbeltz+<version>&body=###%20Engine%20name%0AAkerbeltz%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-08 06:22:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0"]
  y-axis "Elo Rating" 1300 --> 2300
  line "STC (8.0+0.08s)" [1380, 1935]
  line "STC (8.0+0.08s)" [1380, 1935]
  line "LTC (60.0+0.60s)" [1627, 2175]
  line "VLTC (2m24s+1.12s)" [1760, 2276]
  line "VLTC (2m24s+1.12s)" [1760, 2276]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2276 | 30 | 408 | 49% | 2296 | 20% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2175 | 31 | 384 | 47% | 2202 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1935 | 28 | 468 | 48% | 1955 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1760 | 41 | 230 | 41% | 1893 | 22% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1627 | 48 | 164 | 43% | 1720 | 21% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1380 | 45 | 184 | 40% | 1503 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |