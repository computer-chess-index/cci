# Engine: Eubos

Author: Chris Bolt

Home: https://github.com/cjbolt/EubosChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.5 | 2026-06-09 | 2318<sub>(+132) | 2637<sub>(+134) | 2703<sub>(+104) |  |
| 4.4 | 2026-05-06 | 2186<sub>(+87) | 2503<sub>(+53) | 2599<sub>(+33) |  |
| 4.3 | 2026-01-29 | 2099<sub>(-60) | 2450<sub>(+31) | 2566<sub>(+21) |  |
| 4.2 | 2025-10-16 | 2159 | 2419 | 2545 |  |
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

Generated: 2026-08-26 06:24:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4", "4.5"]
  y-axis "Elo Rating" 2000 --> 2800
  line "STC (8.0+0.08s)" [2159, 2099, 2186, 2318]
  line "STC (8.0+0.08s)" [2159, 2099, 2186, 2318]
  line "LTC (60.0+0.60s)" [2419, 2450, 2503, 2637]
  line "VLTC (2m24s+1.12s)" [2545, 2566, 2599, 2703]
  line "VLTC (2m24s+1.12s)" [2545, 2566, 2599, 2703]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2703 | 30 | 338 | 49% | 2712 | 36% |
| 4.5 | LTC <sub>(60.0+0.60s)</sub> | 2637 | 30 | 376 | 49% | 2646 | 28% |
| 4.5 | STC <sub>(8.0+0.08s)</sub> | 2318 | 30 | 408 | 47% | 2354 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2599 | 32 | 320 | 48% | 2618 | 30% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2503 | 32 | 334 | 49% | 2507 | 27% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 2186 | 32 | 344 | 50% | 2179 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2566 | 30 | 388 | 50% | 2556 | 27% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 2450 | 31 | 368 | 49% | 2456 | 24% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 2099 | 28 | 452 | 50% | 2086 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2545 | 36 | 266 | 52% | 2526 | 24% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 2419 | 35 | 272 | 50% | 2415 | 26% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 2159 | 34 | 310 | 52% | 2130 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |