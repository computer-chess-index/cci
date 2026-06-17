# Engine: Rudim

Author: Vishnu Bhagyanath

Home: https://github.com/znxftw/rudim

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.2 | 2026-06-13 | 2435<sub>(+168) | 2715<sub>(+169) | 2765<sub>(+204) |  |
| 3.0.1 | 2026-06-09 | 2267<sub>(+41) | 2546<sub>(+111) | 2561<sub>(-23) |  |
| 3.0.0 | 2026-06-06 | 2226<sub>(+new) | 2435<sub>(+new) | 2584<sub>(+new) |  |
| 2.2.2 | 2026-05-29 |  |  |  |  |
| 2.2.1 | 2026-05-27 |  |  |  |  |
| 2.2.0 | 2026-05-26 |  |  |  |  |
| 2.1.3 | 2026-05-23 |  |  |  |  |
| 2.1.2 | 2026-05-20 | 1804<sub>(+85) | 2020<sub>(+45) | 2148<sub>(+76) |  |
| 2.1.1 | 2026-05-16 | 1719<sub>(-13) | 1975<sub>(+31) | 2072<sub>(+129) |  |
| 2.1.0 | 2026-05-14 | 1732<sub>(+82) | 1944<sub>(+34) | 1943<sub>(-6) |  |
| 2.0.0 | 2026-05-03 | 1650<sub>(+61) | 1910<sub>(+70) | 1949<sub>(-4) |  |
| 1.5 | 2026-04-28 | 1589<sub>(+new) | 1840<sub>(+new) | 1953<sub>(+new) |  |
| 1.4.1 | 2024-12-18 |  |  |  |  |
| 1.3 | 2024-12-05 |  |  |  |  |
| 1.2 | 2022-02-24 |  |  |  |  |
| 1.1 | 2022-02-07 |  |  |  |  |
| 1.0 | 2022-02-06 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rudim+<version>&body=###%20Engine%20name%0ARudim%0A%0A###%20Version%0A3.0.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-17 06:30:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "2.0.0", "2.1.0", "2.1.1", "2.1.2", "3.0.0", "3.0.1", "3.0.2"]
  y-axis "Elo Rating" 1500 --> 2800
  line "STC (8.0+0.08s)" [1589, 1650, 1732, 1719, 1804, 2226, 2267, 2435]
  line "STC (8.0+0.08s)" [1589, 1650, 1732, 1719, 1804, 2226, 2267, 2435]
  line "LTC (60.0+0.60s)" [1840, 1910, 1944, 1975, 2020, 2435, 2546, 2715]
  line "VLTC (2m24s+1.12s)" [1953, 1949, 1943, 2072, 2148, 2584, 2561, 2765]
  line "VLTC (2m24s+1.12s)" [1953, 1949, 1943, 2072, 2148, 2584, 2561, 2765]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "2.0.0", "2.1.0", "2.1.1", "2.1.2", "3.0.0", "3.0.1", "3.0.2"]
  y-axis "Elo Rating" 1500 --> 2800
  line "STC (8.0+0.08s)" [1589, 1650, 1732, 1719, 1804, 2226, 2267, 2435]
  line "STC (8.0+0.08s)" [1589, 1650, 1732, 1719, 1804, 2226, 2267, 2435]
  line "LTC (60.0+0.60s)" [1840, 1910, 1944, 1975, 2020, 2435, 2546, 2715]
  line "VLTC (2m24s+1.12s)" [1953, 1949, 1943, 2072, 2148, 2584, 2561, 2765]
  line "VLTC (2m24s+1.12s)" [1953, 1949, 1943, 2072, 2148, 2584, 2561, 2765]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2765 | 47 | 136 | 52% | 2746 | 44% |
| 3.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2715 | 41 | 176 | 53% | 2688 | 45% |
| 3.0.2 | STC <sub>(8.0+0.08s)</sub> | 2435 | 46 | 152 | 51% | 2427 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2561 | 49 | 136 | 47% | 2588 | 30% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2546 | 37 | 228 | 54% | 2512 | 35% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 2267 | 40 | 208 | 47% | 2294 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2584 | 48 | 150 | 50% | 2589 | 26% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2435 | 41 | 200 | 51% | 2421 | 30% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2226 | 32 | 338 | 57% | 2156 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2148 | 35 | 274 | 51% | 2140 | 26% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2020 | 37 | 244 | 51% | 2009 | 26% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 1804 | 40 | 228 | 51% | 1791 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2072 | 36 | 284 | 49% | 2079 | 23% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 1975 | 32 | 340 | 47% | 1991 | 26% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 1719 | 37 | 264 | 48% | 1728 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1943 | 34 | 292 | 51% | 1936 | 25% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1944 | 34 | 288 | 50% | 1945 | 26% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 1732 | 35 | 276 | 49% | 1735 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1949 | 35 | 294 | 49% | 1962 | 19% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1910 | 33 | 336 | 51% | 1899 | 20% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1650 | 34 | 306 | 47% | 1682 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 1953 | 37 | 264 | 47% | 1985 | 24% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 1840 | 35 | 296 | 50% | 1844 | 18% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 1589 | 34 | 320 | 53% | 1558 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |