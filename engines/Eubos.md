# Engine: Eubos

Author: Chris Bolt

Home: https://github.com/cjbolt/EubosChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.5 | 2026-06-09 | 2317<sub>(+133) | 2635<sub>(+133) | 2704<sub>(+107) |  |
| 4.4 | 2026-05-06 | 2184<sub>(+86) | 2502<sub>(+53) | 2597<sub>(+31) |  |
| 4.3 | 2026-01-29 | 2098<sub>(-59) | 2449<sub>(+31) | 2566<sub>(+23) |  |
| 4.2 | 2025-10-16 | 2157 | 2418 | 2543 |  |
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

Generated: 2026-08-25 06:25:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4", "4.5"]
  y-axis "Elo Rating" 2000 --> 2800
  line "STC (8.0+0.08s)" [2157, 2098, 2184, 2317]
  line "STC (8.0+0.08s)" [2157, 2098, 2184, 2317]
  line "LTC (60.0+0.60s)" [2418, 2449, 2502, 2635]
  line "VLTC (2m24s+1.12s)" [2543, 2566, 2597, 2704]
  line "VLTC (2m24s+1.12s)" [2543, 2566, 2597, 2704]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2704 | 31 | 334 | 49% | 2711 | 36% |
| 4.5 | LTC <sub>(60.0+0.60s)</sub> | 2635 | 30 | 376 | 49% | 2645 | 28% |
| 4.5 | STC <sub>(8.0+0.08s)</sub> | 2317 | 30 | 408 | 47% | 2353 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2597 | 32 | 320 | 48% | 2616 | 30% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2502 | 32 | 334 | 49% | 2506 | 27% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 2184 | 32 | 344 | 50% | 2179 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2566 | 30 | 388 | 50% | 2554 | 27% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 2449 | 31 | 368 | 49% | 2456 | 24% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 2098 | 28 | 452 | 50% | 2084 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2543 | 36 | 266 | 52% | 2525 | 24% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 2418 | 35 | 272 | 50% | 2414 | 26% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 2157 | 34 | 310 | 52% | 2129 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |