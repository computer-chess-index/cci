# Engine: Radiance

Author: Paul-Elie Pipelin

Home: https://github.com/ppipelin/radiance

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4 | 2026-04-23 | 1758<sub>(+57) | 2120<sub>(+125) | 2264<sub>(+119) |  |
| 4.3 | 2026-03-25 | 1701<sub>(+94) | 1995<sub>(+112) | 2145<sub>(+210) |  |
| 4.2 | 2026-01-17 | 1607<sub>(+new) | 1883<sub>(+new) | 1935<sub>(+new) |  |
| 4.1 | 2025-08-16 |  |  |  |  |
| 4.0.1 | 2025-04-17 |  |  |  |  |
| 4.0 | 2025-04-16 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Radiance+<version>&body=###%20Engine%20name%0ARadiance%0A%0A###%20Version%0A4.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-17 06:27:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4"]
  y-axis "Elo Rating" 1600 --> 2300
  line "STC (8.0+0.08s)" [1607, 1701, 1758]
  line "STC (8.0+0.08s)" [1607, 1701, 1758]
  line "LTC (60.0+0.60s)" [1883, 1995, 2120]
  line "VLTC (2m24s+1.12s)" [1935, 2145, 2264]
  line "VLTC (2m24s+1.12s)" [1935, 2145, 2264]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2264 | 35 | 292 | 51% | 2256 | 21% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2120 | 32 | 328 | 52% | 2102 | 25% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 1758 | 32 | 356 | 50% | 1754 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2145 | 30 | 412 | 54% | 2103 | 18% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 1995 | 31 | 362 | 49% | 2005 | 23% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 1701 | 32 | 360 | 49% | 1709 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1935 | 36 | 304 | 45% | 2028 | 19% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 1883 | 39 | 246 | 47% | 1940 | 18% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 1607 | 34 | 328 | 45% | 1685 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |