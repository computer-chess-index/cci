# Engine: Eubos

Author: Chris Bolt

Home: https://github.com/cjbolt/EubosChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.5 | 2026-06-09 | 2317<sub>(+134) | 2637<sub>(+137) | 2703<sub>(+106) |  |
| 4.4 | 2026-05-06 | 2183<sub>(+85) | 2500<sub>(+52) | 2597<sub>(+32) |  |
| 4.3 | 2026-01-29 | 2098<sub>(-58) | 2448<sub>(+31) | 2565<sub>(+23) |  |
| 4.2 | 2025-10-16 | 2156 | 2417 | 2542 |  |
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

Generated: 2026-08-22 06:25:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4", "4.5"]
  y-axis "Elo Rating" 2000 --> 2800
  line "STC (8.0+0.08s)" [2156, 2098, 2183, 2317]
  line "STC (8.0+0.08s)" [2156, 2098, 2183, 2317]
  line "LTC (60.0+0.60s)" [2417, 2448, 2500, 2637]
  line "VLTC (2m24s+1.12s)" [2542, 2565, 2597, 2703]
  line "VLTC (2m24s+1.12s)" [2542, 2565, 2597, 2703]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2703 | 31 | 334 | 49% | 2709 | 36% |
| 4.5 | LTC <sub>(60.0+0.60s)</sub> | 2637 | 30 | 372 | 49% | 2645 | 28% |
| 4.5 | STC <sub>(8.0+0.08s)</sub> | 2317 | 30 | 404 | 47% | 2352 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2597 | 32 | 320 | 48% | 2616 | 30% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2500 | 32 | 334 | 49% | 2504 | 27% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 2183 | 32 | 344 | 50% | 2178 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2565 | 30 | 388 | 50% | 2553 | 27% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 2448 | 31 | 368 | 49% | 2454 | 24% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 2098 | 28 | 452 | 50% | 2083 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2542 | 36 | 266 | 52% | 2523 | 24% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 2417 | 35 | 272 | 50% | 2412 | 26% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 2156 | 34 | 310 | 52% | 2129 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |