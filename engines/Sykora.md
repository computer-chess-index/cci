# Engine: Sykora

Author: Sullivan Bognar

Home: https://github.com/sb2bg/sykora

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-02 | 2930<sub>(+223) | 3262<sub>(+165) | 3356<sub>(+178) |  |
| 3.1 | 2026-07-15 | 2707<sub>(+374) | 3097<sub>(+100) | 3178<sub>(+131) |  |
| 3.0 | 2026-07-12 | 2333<sub>(+new) | 2997<sub>(+new) | 3047<sub>(+new) |  |
| 0.2.2 | 2026-03-23 |  |  |  |  |
| 0.2.1 | 2026-03-02 | 1997<sub>(+114) | 2353<sub>(+132) | 2437<sub>(+25) |  |
| 0.1.0 | 2026-02-17 | 1883 | 2221 | 2412 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sykora+<version>&body=###%20Engine%20name%0ASykora%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-19 06:30:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.1", "3.0", "3.1", "4.0"]
  y-axis "Elo Rating" 1800 --> 3400
  line "STC (8.0+0.08s)" [1883, 1997, 2333, 2707, 2930]
  line "STC (8.0+0.08s)" [1883, 1997, 2333, 2707, 2930]
  line "LTC (60.0+0.60s)" [2221, 2353, 2997, 3097, 3262]
  line "VLTC (2m24s+1.12s)" [2412, 2437, 3047, 3178, 3356]
  line "VLTC (2m24s+1.12s)" [2412, 2437, 3047, 3178, 3356]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3356 | 33 | 226 | 48% | 3371 | 77% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3262 | 37 | 180 | 54% | 3237 | 74% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 2930 | 37 | 184 | 55% | 2889 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3178 | 44 | 132 | 50% | 3175 | 70% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3097 | 44 | 132 | 52% | 3087 | 64% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2707 | 46 | 126 | 51% | 2693 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3047 | 48 | 124 | 56% | 2982 | 57% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2997 | 56 | 96 | 54% | 2950 | 46% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2333 | 34 | 240 | 65% | 2222 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2437 | 36 | 254 | 53% | 2411 | 34% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2353 | 33 | 304 | 50% | 2349 | 28% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1997 | 34 | 306 | 51% | 1986 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2412 | 126 | 28 | 21% | 2715 | 21% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2221 | 70 | 70 | 46% | 2253 | 27% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 1883 | 97 | 40 | 41% | 2005 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |