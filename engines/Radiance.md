# Engine: Radiance

Author: Paul-Elie Pipelin

Home: https://github.com/ppipelin/radiance

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4 | 2026-04-23 | 1746<sub>(+48) | 2124<sub>(+131) | 2261<sub>(+119) |  |
| 4.3 | 2026-03-25 | 1698<sub>(+94) | 1993<sub>(+112) | 2142<sub>(+210) |  |
| 4.2 | 2026-01-17 | 1604<sub>(+new) | 1881<sub>(+new) | 1932<sub>(+new) |  |
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

Generated: 2026-05-14 06:27:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4"]
  y-axis "Elo Rating" 1600 --> 2300
  line "STC (8.0+0.08s)" [1604, 1698, 1746]
  line "STC (8.0+0.08s)" [1604, 1698, 1746]
  line "LTC (60.0+0.60s)" [1881, 1993, 2124]
  line "VLTC (2m24s+1.12s)" [1932, 2142, 2261]
  line "VLTC (2m24s+1.12s)" [1932, 2142, 2261]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2261 | 35 | 286 | 51% | 2252 | 21% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2124 | 33 | 308 | 52% | 2103 | 25% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 1746 | 33 | 334 | 50% | 1744 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2142 | 30 | 412 | 54% | 2102 | 18% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 1993 | 31 | 362 | 49% | 2003 | 23% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 1698 | 32 | 360 | 49% | 1708 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1932 | 36 | 304 | 45% | 2026 | 19% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 1881 | 39 | 246 | 47% | 1939 | 18% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 1604 | 34 | 328 | 45% | 1682 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |