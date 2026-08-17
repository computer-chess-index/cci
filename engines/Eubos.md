# Engine: Eubos

Author: Chris Bolt

Home: https://github.com/cjbolt/EubosChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.5 | 2026-06-09 | 2309<sub>(+133) | 2628<sub>(+135) | 2695<sub>(+104) |  |
| 4.4 | 2026-05-06 | 2176<sub>(+85) | 2493<sub>(+52) | 2591<sub>(+33) |  |
| 4.3 | 2026-01-29 | 2091<sub>(-58) | 2441<sub>(+31) | 2558<sub>(+23) |  |
| 4.2 | 2025-10-16 | 2149 | 2410 | 2535 |  |
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

Generated: 2026-08-17 06:24:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4", "4.5"]
  y-axis "Elo Rating" 2000 --> 2700
  line "STC (8.0+0.08s)" [2149, 2091, 2176, 2309]
  line "STC (8.0+0.08s)" [2149, 2091, 2176, 2309]
  line "LTC (60.0+0.60s)" [2410, 2441, 2493, 2628]
  line "VLTC (2m24s+1.12s)" [2535, 2558, 2591, 2695]
  line "VLTC (2m24s+1.12s)" [2535, 2558, 2591, 2695]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2695 | 31 | 330 | 49% | 2704 | 36% |
| 4.5 | LTC <sub>(60.0+0.60s)</sub> | 2628 | 30 | 364 | 49% | 2639 | 28% |
| 4.5 | STC <sub>(8.0+0.08s)</sub> | 2309 | 30 | 400 | 47% | 2346 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2591 | 32 | 320 | 48% | 2610 | 30% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2493 | 32 | 334 | 49% | 2498 | 27% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 2176 | 32 | 344 | 50% | 2169 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2558 | 30 | 388 | 50% | 2546 | 27% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 2441 | 31 | 368 | 49% | 2448 | 24% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 2091 | 28 | 452 | 50% | 2076 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2535 | 36 | 266 | 52% | 2516 | 24% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 2410 | 35 | 272 | 50% | 2406 | 26% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 2149 | 34 | 310 | 52% | 2122 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |