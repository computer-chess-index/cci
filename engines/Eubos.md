# Engine: Eubos

Author: Chris Bolt

Home: https://github.com/cjbolt/EubosChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.5 | 2026-06-09 | 2307<sub>(+132) | 2624<sub>(+129) | 2695<sub>(+104) |  |
| 4.4 | 2026-05-06 | 2175<sub>(+85) | 2495<sub>(+53) | 2591<sub>(+33) |  |
| 4.3 | 2026-01-29 | 2090<sub>(-58) | 2442<sub>(+32) | 2558<sub>(+23) |  |
| 4.2 | 2025-10-16 | 2148 | 2410 | 2535 |  |
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

Generated: 2026-08-06 08:26:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4", "4.5"]
  y-axis "Elo Rating" 2000 --> 2700
  line "STC (8.0+0.08s)" [2148, 2090, 2175, 2307]
  line "STC (8.0+0.08s)" [2148, 2090, 2175, 2307]
  line "LTC (60.0+0.60s)" [2410, 2442, 2495, 2624]
  line "VLTC (2m24s+1.12s)" [2535, 2558, 2591, 2695]
  line "VLTC (2m24s+1.12s)" [2535, 2558, 2591, 2695]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2695 | 31 | 322 | 49% | 2703 | 35% |
| 4.5 | LTC <sub>(60.0+0.60s)</sub> | 2624 | 31 | 348 | 48% | 2641 | 28% |
| 4.5 | STC <sub>(8.0+0.08s)</sub> | 2307 | 31 | 376 | 47% | 2345 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2591 | 32 | 320 | 48% | 2610 | 30% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2495 | 32 | 334 | 49% | 2499 | 27% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 2175 | 32 | 344 | 50% | 2169 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2558 | 30 | 388 | 50% | 2547 | 27% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 2442 | 31 | 368 | 49% | 2448 | 24% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 2090 | 28 | 452 | 50% | 2076 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2535 | 36 | 266 | 52% | 2518 | 24% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 2410 | 35 | 272 | 50% | 2406 | 26% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 2148 | 34 | 310 | 52% | 2121 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |