# Engine: Dual

Author: Tomasz Stawowy

Home: https://github.com/DSTGU/Dual

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.2 | 2026-08-08 | 2708<sub>(+216) | 2935<sub>(+138) | 3077<sub>(+218) |  |
| 0.4.1 | 2026-07-26 | 2492<sub>(+131) | 2797<sub>(+117) | 2859<sub>(+70) |  |
| 0.4.0 | 2026-07-19 | 2361<sub>(+92) | 2680<sub>(+89) | 2789<sub>(+120) |  |
| 0.3.2 | 2026-07-06 | 2269<sub>(+new) | 2591<sub>(+new) | 2669<sub>(+new) |  |
| 0.3.1 | 2026-07-05 |  |  |  |  |
| 0.3.0 | 2026-05-23 |  |  |  |  |
| 0.2.9 | 2026-05-19 | 1922<sub>(+226) | 2105<sub>(+243) | 2221<sub>(+290) |  |
| 0.2.8 | 2026-05-15 | 1696<sub>(+99) | 1862<sub>(+31) | 1931<sub>(+72) |  |
| 0.2.7 | 2026-05-11 | 1597 | 1831 | 1859 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dual+<version>&body=###%20Engine%20name%0ADual%0A%0A###%20Version%0A0.4.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-23 06:24:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8", "0.2.9", "0.3.2", "0.4.0", "0.4.1", "0.4.2"]
  y-axis "Elo Rating" 1500 --> 3100
  line "STC (8.0+0.08s)" [1597, 1696, 1922, 2269, 2361, 2492, 2708]
  line "STC (8.0+0.08s)" [1597, 1696, 1922, 2269, 2361, 2492, 2708]
  line "LTC (60.0+0.60s)" [1831, 1862, 2105, 2591, 2680, 2797, 2935]
  line "VLTC (2m24s+1.12s)" [1859, 1931, 2221, 2669, 2789, 2859, 3077]
  line "VLTC (2m24s+1.12s)" [1859, 1931, 2221, 2669, 2789, 2859, 3077]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3077 | 33 | 250 | 50% | 3073 | 55% |
| 0.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2935 | 36 | 224 | 51% | 2928 | 50% |
| 0.4.2 | STC <sub>(8.0+0.08s)</sub> | 2708 | 36 | 238 | 51% | 2695 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2859 | 33 | 276 | 52% | 2846 | 42% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2797 | 33 | 272 | 48% | 2812 | 41% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 2492 | 33 | 304 | 48% | 2510 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2789 | 35 | 244 | 53% | 2768 | 42% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2680 | 39 | 216 | 53% | 2657 | 31% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 2361 | 39 | 216 | 49% | 2371 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2669 | 39 | 200 | 50% | 2662 | 40% |
| 0.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2591 | 44 | 174 | 54% | 2549 | 30% |
| 0.3.2 | STC <sub>(8.0+0.08s)</sub> | 2269 | 42 | 200 | 48% | 2282 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2221 | 34 | 298 | 51% | 2219 | 23% |
| 0.2.9 | LTC <sub>(60.0+0.60s)</sub> | 2105 | 37 | 258 | 52% | 2087 | 24% |
| 0.2.9 | STC <sub>(8.0+0.08s)</sub> | 1922 | 35 | 288 | 51% | 1916 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1931 | 34 | 312 | 48% | 1944 | 21% |
| 0.2.8 | LTC <sub>(60.0+0.60s)</sub> | 1862 | 35 | 276 | 51% | 1844 | 29% |
| 0.2.8 | STC <sub>(8.0+0.08s)</sub> | 1696 | 33 | 314 | 46% | 1725 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1859 | 32 | 334 | 47% | 1887 | 25% |
| 0.2.7 | LTC <sub>(60.0+0.60s)</sub> | 1831 | 35 | 304 | 49% | 1847 | 19% |
| 0.2.7 | STC <sub>(8.0+0.08s)</sub> | 1597 | 36 | 292 | 50% | 1593 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |