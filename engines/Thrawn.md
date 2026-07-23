# Engine: Thrawn

Author: Feiyu Lin

Home: https://github.com/feftywacky/Thrawn

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-07-07 | 2866<sub>(+649) | 3162<sub>(+534) | 3248<sub>(+459) |  |
| 3.0 | 2026-05-25 | 2217<sub>(-241) | 2628<sub>(-192) | 2789<sub>(-100) |  |
| 2.2 | 2025-10-08 | 2458<sub>(+new) | 2820<sub>(+new) | 2889<sub>(+new) |  |
| 2.1 | 2024-07-16 |  |  |  |  |
| 2.0 | 2024-01-01 |  |  |  |  |
| 1.1 | 2023-12-28 |  |  |  |  |
| 1.0 | 2023-12-27 |  |  |  |  |
| 0.6-beta | 2023-12-26 |  |  |  |  |
| 0.5-beta | 2023-12-24 |  |  |  |  |
| 0.4-beta | 2023-12-24 |  |  |  |  |
| 0.3-beta | 2023-12-16 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Thrawn+<version>&body=###%20Engine%20name%0AThrawn%0A%0A###%20Version%0A3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-23 06:33:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "3.0", "3.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2458, 2217, 2866]
  line "STC (8.0+0.08s)" [2458, 2217, 2866]
  line "LTC (60.0+0.60s)" [2820, 2628, 3162]
  line "VLTC (2m24s+1.12s)" [2889, 2789, 3248]
  line "VLTC (2m24s+1.12s)" [2889, 2789, 3248]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3248 | 35 | 210 | 53% | 3208 | 67% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3162 | 38 | 192 | 53% | 3132 | 61% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2866 | 38 | 212 | 50% | 2850 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2789 | 44 | 162 | 47% | 2813 | 35% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2628 | 45 | 156 | 49% | 2637 | 35% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2217 | 52 | 124 | 48% | 2238 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2889 | 24 | 510 | 47% | 2916 | 48% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2820 | 27 | 434 | 50% | 2822 | 39% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2458 | 25 | 540 | 48% | 2480 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |