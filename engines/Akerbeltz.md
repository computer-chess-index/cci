# Engine: Akerbeltz

Author: Julen Aristondo

Home: https://github.com/neluj/Akerbeltz

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-04-14 | 1935<sub>(+553) | 2196<sub>(+567) | 2290<sub>(+527) |  |
| 1.0.0 | 2025-12-31 | 1382 | 1629 | 1763 |  |
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

Generated: 2026-08-18 06:22:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0"]
  y-axis "Elo Rating" 1300 --> 2300
  line "STC (8.0+0.08s)" [1382, 1935]
  line "STC (8.0+0.08s)" [1382, 1935]
  line "LTC (60.0+0.60s)" [1629, 2196]
  line "VLTC (2m24s+1.12s)" [1763, 2290]
  line "VLTC (2m24s+1.12s)" [1763, 2290]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2290 | 27 | 484 | 50% | 2296 | 21% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2196 | 28 | 460 | 49% | 2205 | 23% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1935 | 26 | 540 | 48% | 1958 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1763 | 41 | 230 | 41% | 1895 | 22% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1629 | 48 | 164 | 43% | 1723 | 21% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1382 | 45 | 184 | 40% | 1507 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |