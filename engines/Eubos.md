# Engine: Eubos

Author: Chris Bolt

Home: https://github.com/cjbolt/EubosChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.5 | 2026-06-09 | 2314<sub>(+134) | 2628<sub>(+130) | 2699<sub>(+106) |  |
| 4.4 | 2026-05-06 | 2180<sub>(+86) | 2498<sub>(+53) | 2593<sub>(+31) |  |
| 4.3 | 2026-01-29 | 2094<sub>(-59) | 2445<sub>(+31) | 2562<sub>(+23) |  |
| 4.2 | 2025-10-16 | 2153 | 2414 | 2539 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Eubos+<version>&body=###%20Engine%20name%0AEubos%0A%0A###%20Version%0A4.5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-18 06:24:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4", "4.5"]
  y-axis "Elo Rating" 2000 --> 2700
  line "STC (8.0+0.08s)" [2153, 2094, 2180, 2314]
  line "STC (8.0+0.08s)" [2153, 2094, 2180, 2314]
  line "LTC (60.0+0.60s)" [2414, 2445, 2498, 2628]
  line "VLTC (2m24s+1.12s)" [2539, 2562, 2593, 2699]
  line "VLTC (2m24s+1.12s)" [2539, 2562, 2593, 2699]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2699 | 31 | 330 | 49% | 2707 | 36% |
| 4.5 | LTC <sub>(60.0+0.60s)</sub> | 2628 | 30 | 368 | 49% | 2642 | 28% |
| 4.5 | STC <sub>(8.0+0.08s)</sub> | 2314 | 30 | 404 | 47% | 2350 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2593 | 32 | 320 | 48% | 2614 | 30% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2498 | 32 | 334 | 49% | 2502 | 27% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 2180 | 32 | 344 | 50% | 2174 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2562 | 30 | 388 | 50% | 2550 | 27% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 2445 | 31 | 368 | 49% | 2452 | 24% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 2094 | 28 | 452 | 50% | 2080 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2539 | 36 | 266 | 52% | 2520 | 24% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 2414 | 35 | 272 | 50% | 2410 | 26% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 2153 | 34 | 310 | 52% | 2126 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |