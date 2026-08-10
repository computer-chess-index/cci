# Engine: Lc0

Author: https://lczero.org/

Home: https://github.com/LeelaChessZero/lc0

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2396<sub>(+27) | 2992<sub>(+6) | 3163<sub>(-57) |  |
| 0.29.0 | 2022-12-13 | 2369 | 2986 | 3220 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lc0+<version>&body=###%20Engine%20name%0ALc0%0A%0A###%20Version%0A0.32.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-10 07:03:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2369, 2396]
  line "STC (8.0+0.08s)" [2369, 2396]
  line "LTC (60.0+0.60s)" [2986, 2992]
  line "VLTC (2m24s+1.12s)" [3220, 3163]
  line "VLTC (2m24s+1.12s)" [3220, 3163]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.32.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3163 | 23 | 508 | 49% | 3174 | 53% |
| 0.32.1 | LTC <sub>(60.0+0.60s)</sub> | 2992 | 24 | 526 | 48% | 3005 | 46% |
| 0.32.1 | STC <sub>(8.0+0.08s)</sub> | 2396 | 22 | 746 | 49% | 2396 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.29.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3220 | 28 | 356 | 50% | 3220 | 54% |
| 0.29.0 | LTC <sub>(60.0+0.60s)</sub> | 2986 | 30 | 328 | 48% | 3000 | 47% |
| 0.29.0 | STC <sub>(8.0+0.08s)</sub> | 2369 | 32 | 400 | 42% | 2483 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |