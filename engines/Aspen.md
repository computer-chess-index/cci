# Engine: Aspen

Author: A. Theofanis

Home: https://github.com/ATheofanis/aspen-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.0 | 2026-05-23 |  |  |  |  |
| 2.2.0 | 2026-05-22 | 2697<sub>(+20) | 3077<sub>(+95) | 3104<sub>(+34) |  |
| 2.1.0 | 2026-05-21 | 2677<sub>(+new) | 2982<sub>(+new) | 3070<sub>(+new) |  |
| 2.0.0 | 2026-05-21 |  |  |  |  |
| 1.3.0 | 2026-05-20 | 2354<sub>(+168) | 2693<sub>(+51) | 2838<sub>(+156) |  |
| 1.2.3 | 2026-05-20 | 2186<sub>(+new) | 2642<sub>(+new) | 2682<sub>(+new) |  |
| 1.2.2 | 2026-05-19 |  |  |  |  |
| 1.2.1 | 2026-05-19 |  |  |  |  |
| 1.2.0 | 2026-05-19 |  |  |  |  |
| 1.0.1 | 2026-05-14 |  |  |  |  |
| 1.0.0 | 2026-05-12 |  |  |  |  |
| 0.2.0 | 2026-05-09 |  |  |  |  |
| 0.1.0 | 2026-05-02 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Aspen+<version>&body=###%20Engine%20name%0AAspen%0A%0A###%20Version%0A2.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-20 06:22:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.2.3", "2.1.0", "2.2.0"]
  y-axis "Elo Rating" 2100 --> 3200
  line "STC (8.0+0.08s)" [2354, 2186, 2677, 2697]
  line "STC (8.0+0.08s)" [2354, 2186, 2677, 2697]
  line "LTC (60.0+0.60s)" [2693, 2642, 2982, 3077]
  line "VLTC (2m24s+1.12s)" [2838, 2682, 3070, 3104]
  line "VLTC (2m24s+1.12s)" [2838, 2682, 3070, 3104]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3104 | 34 | 232 | 48% | 3117 | 55% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3077 | 35 | 224 | 50% | 3077 | 60% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2697 | 33 | 282 | 51% | 2693 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3070 | 31 | 318 | 52% | 3056 | 45% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2982 | 28 | 382 | 51% | 2974 | 47% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2677 | 32 | 304 | 54% | 2641 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2838 | 59 | 92 | 54% | 2797 | 33% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2693 | 48 | 140 | 53% | 2665 | 32% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2354 | 47 | 158 | 45% | 2404 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2682 | 111 | 28 | 55% | 2628 | 18% |
| 1.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2642 | 101 | 36 | 67% | 2485 | 22% |
| 1.2.3 | STC <sub>(8.0+0.08s)</sub> | 2186 | 84 | 48 | 50% | 2191 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |